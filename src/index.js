/* eslint-disable indent */
/**
 * 使用新的node-sdk https://github.com/upyun/node-sdk
 * 又拍接口文档 http://docs.upyun.com/api/rest_api/
 */
 const fsp = require('fs-promise');
 const path = require('path');
 const fs = require('fs');
 const UpYun = require('upyun');
 const Scheduler = require('./scheduler');


let UploadScheduler = null;


function generateScheduler ({ size }) {
	UploadScheduler = new Scheduler({ size });
	// UploadScheduler.on('end', () => {
	// 	console.log('all task end');
	// })
	// UploadScheduler.on('reject', (err) => {
	// 	console.log('opps , error!!!', err)
	// })
}

 class UpYunTool {
	 constructor (params) {
		 const {bucket, operator, password, console = true, retry = 3, concurrent = 6} = params;
		 this.console = console;
		 const upyunService = new UpYun.Service(bucket, operator, password);
		 this.upyun = new UpYun.Client(upyunService);
		 this.retry = retry;
		 this.concurrent = concurrent;
		 generateScheduler({ size: concurrent });
	 }
	 /**
		 * @param {String} remotePath - 远程
		 * @return Number // byte
		 */
		 usage (remotePath) {
			 return new Promise((resolve, reject) => {
				 this.upyun.usage(remotePath).then(size => {
					 resolve(size);
				 }).catch(error => reject(error));
			 });
		 }
	 /**
		 * @param {String} remotePath - 需要查看的目录
		 * @param {Object} options - 配置参数
		 * @param {Number} options.limit - 每次请求获取的目录最大列表，最大值 10000，默认 100
		 * @param {String} options.order - 列表以文件最后修改时间排序，可选值 asc|desc，默认 asc
		 * @param {String} options.iter - 遍历起点，每次响应参数中，将会包含遍历下一页需要的 iter 值
		 * @return {Object}
		 * {
		 *		files: [
		 *		  {
		 *		    name: 'example.txt', // file or dir name
		 *		    type: 'N', // file type, N: file; F: dir
		 *		    size: 28392812, // file size
		 *		    time: 1486053098 // last modify time
		 *		  }
		 *		],
		 *   next: 'dlam9pd2Vmd2Z3Zg==' // next page iter
		 * }
	 */
	 listDir (remotePath, options = {limit: 100, order: 'asc' }) {
		 return new Promise((resolve, reject) => {
			 // 是否完全获取完毕交给业务层面处理
			 this.upyun.listDir(remotePath, options)
				.then(res => resolve(res))
				.catch(error => reject(error));
		 });
	 }
	 /**
		* @param {String} remotePath - 想创建的远程目录路径
		*/
	 makeDir (remotePath) {
		 return new Promise((resolve, reject) => {
			 let RETRY = this.retry;
			 const mkdir = async () => {
				 try {
					 const res = await this.upyun.makeDir(remotePath);
					 resolve(res);
				 } catch (error) {
					 if (this.console  && RETRY > 0) console.log('makeDir fail: ' + remotePath, '剩余重试次数:', RETRY);
					 --RETRY;
					 if (RETRY >= 0) return mkdir();
					 return reject(error);
				 }
			 };
   			mkdir();
		 });
	 }
	 /**
		* @param {String} remotePath - 远程文件保存路径
		* @param {String|Stream|Buffer} localFile - 需要上传的本地文件
		* @param {Object} options - 上传参数 Content-MD5 | Content-Length | Content-Type | Content-Secret | x-gmkerl-thumb | x-upyun-meta-x | x-upyun-meta-ttl 参见http://docs.upyun.com/api/rest_api/#_2
		*/
	 putFile (remotePath, localFile, opts) {
		 return new Promise((resolve, reject) => {
			 let RETRY = this.retry;
			 const upload = async () => {
				 try {
					 await this.upyun.putFile(remotePath, localFile, opts);
					 if (this.console) console.log('[OK]putFile: ' + remotePath);
					 return resolve(remotePath);
				 } catch (error) {
					 if (this.console && RETRY > 0) console.log('\x1B[33m', 'putFile fail: ' + remotePath, '剩余重试次数:', RETRY);
					 --RETRY;
					 if (RETRY >= 0) return upload();
					 return reject(error);
				 }
			 };
			 upload();
		 });
	 }
	 /**
		* @param {String} remotePath - 远程文件路径
		*/
	 headFile (remotePath) {
		 return new Promise((resolve, reject) => {
			 this.upyun.headFile(remotePath).then(res => {
				 resolve(res);
			 }).catch(error => reject(error));
		 });
	 }
	 /**
		* 下载文件
		* @param {String} remotePath - 文件远程路径
		* @param {Stream} saveStream - 可选值，如果传递则要传递一个流，下载的文件写入该流中。
		*/
	 getFile (remotePath, saveStream) {
		 return new Promise((resolve, reject) => {
			 this.upyun.getFile(remotePath, saveStream).then(content => {
				 resolve(content);
			 }).catch(error => reject(error));
		 });
	 }
	 /**
		* @param {String} 文件或目录的远程路径
		*/
	 deleteFile (remotePath) {
		 return new Promise((resolve, reject) => {
			 this.upyun.deleteFile(remotePath).then(res => {
				 if (res) return resolve(res);
   return reject(res);
			 }).catch(err => reject(err));
		 });
	 }

	 /**
		* @param {String} remotePath - 远程存储路径
		* @param {String} localPath - 本地文件夹目录
		*/
	 putDir (remotePath, localPath) {
		 const sub = {
			 remotePaths: [],
			 localPaths: [],
			 promises: []
		 };
		 return this.makeDir(remotePath).then(() => fsp.readdir(localPath)).then((names) => {
			 names.forEach((name) => {
				 if (name && name.length > 0 && name[0] !== '.') {
					 sub.remotePaths.push(remotePath + '/' + name);
					 sub.localPaths.push(path.join(localPath, name));
					 sub.promises.push(fsp.stat(path.join(localPath, name)));
				 }
			 });
			 return Promise.all(sub.promises);
		 }).then((datas) => {
			 // 路径对应的内容详情，是文件或文件夹
			 const allPromises = []
			 if (!this.concurrent) {
				for (let i = 0; i < datas.length; i++) {
					if (datas[i].isDirectory()) {
						allPromises.push(this.putDir(sub.remotePaths[i], sub.localPaths[i]));
					} else {
						allPromises.push(this.putFile(sub.remotePaths[i], sub.localPaths[i] && fs.existsSync(sub.localPaths[i]) ? fs.createReadStream(sub.localPaths[i]) : sub.localPaths[i]));
					}
				}
			 } else {
				for (let i = 0; i < datas.length; i++) {
					if (datas[i].isDirectory()) {
						const [promise, ] = UploadScheduler.addTask(this.putDir.bind(this))(sub.remotePaths[i], sub.localPaths[i]);
						allPromises.push(promise);
					} else {
						const [promise, ] = UploadScheduler.addTask(this.putFile.bind(this))(sub.remotePaths[i], sub.localPaths[i] && fs.existsSync(sub.localPaths[i]) ? fs.createReadStream(sub.localPaths[i]) : sub.localPaths[i])
						allPromises.push(promise);
					}
				}
			}
			return Promise.all(allPromises);
		 }).then((results = []) => {
			 let paths = [];
			 results.forEach((result) => {
				 if (typeof result === 'string') {
					 paths.push(result);
				 } else {
					 paths.push.apply(paths, result);
				 }
			 });
			 return paths;
		 }).catch(err => console.error('\x1B[31m%s\x1B[0m', `putDir Error: ${err.message}`));
	 }
 }

 module.exports = UpYunTool;
