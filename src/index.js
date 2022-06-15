/**
 * 使用新的node-sdk https://github.com/upyun/node-sdk
 * 又拍接口文档 http://docs.upyun.com/api/rest_api/
 */
const fsp = require('fs-promise');
const path = require('path');
const UpYun = require('upyun');
class UpYunTool {
  constructor (params) {
    const {bucket, operator, password, console = true} = params;
    this.console = console;
    const upyunService = new UpYun.Service(bucket, operator, password);
    this.upyun = new UpYun.Client(upyunService);
  }
  /**
      * @return Number // byte
      */
  usage () {
    return new Promise((resolve, reject) => {
      this.upyun.usage((err, result) => {
        if (!err && result && result.statusCode === 200) {
          const usageByte = Number(result.data);
          if (this.console) console.log('usage ' + usageByte + ' bytes (' + (usageByte / 1024 / 1024).toFixed(2) + ' MB)');
          resolve(Number(result.data));
        } else {
          reject(result);
        }
      });
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
  makeDir (remotePath) {
    return new Promise((resolve, reject) => {
      let RETRY = 3;
      const mkdir = async () => {
        try {
          const res = await  this.upyun.makeDir(remotePath);
          resolve(res);
        } catch (error) {
          if (this.console) console.log('makeDir fail: ' + remotePath, '剩余重试次数:', RETRY);
          --RETRY;
          if (RETRY >= 0) return mkdir();
          return reject(error);
        }
      };
			 mkdir();
    });
  }
  putFile (remotePath, localFile, opts = {}) {
    return new Promise((resolve, reject) => {
      if (this.console) console.log('[OK]putFile: ' + remotePath);
      let RETRY = 3;
      const upload = async () => {
        try {
        	await this.upyun.putFile(remotePath, localFile, opts);
         	if (this.console) console.log('[OK]putFile: ' + remotePath);
         	resolve(remotePath);
        } catch (error) {
          if (this.console) console.log('putFile fail: ' + remotePath, '剩余重试次数:', RETRY);
          --RETRY;
          if (RETRY >= 0) return upload();
          return reject(error);
        }
      };
      upload();
    });
  }
  headFile (remotePath) {
    return new Promise((resolve, reject) => {
      this.upyun.headFile(remotePath).then(res => {
        resolve(res);
      }).catch(error => reject(error));
    });
  }
  getFile (remotePath, saveStream) {
    return new Promise((resolve, reject) => {
      this.upyun.getFile(remotePath, saveStream).then(content => {
        resolve(content);
      }).catch(error => reject(error));
    });
  }
  deleteFile (remotePath) {
    return new Promise((resolve, reject) => {
      this.upyun.deleteFile(remotePath).then(res => {
        if (res) return resolve(res);
				 return reject(res);
      }).catch(err => reject(err));
    });
  }

  // --- Advanced functions ---
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
      const arrSubP = [];
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].isDirectory()) {
          arrSubP.push(this.putDir(sub.remotePaths[i], sub.localPaths[i]));
        } else {
          arrSubP.push(this.putFile(sub.remotePaths[i], sub.localPaths[i]));
        }
      }
      return Promise.all(arrSubP);
    }).then((results) => {
      let paths = [];
      results.forEach((result) => {
        if (typeof result === 'string') {
          paths.push(result);
        } else {
          paths.push.apply(paths, result);
        }
      });
      return paths;
    }).catch(err => console.error('putDir Error', err.message));
  }
}

module.exports = UpYunTool;

