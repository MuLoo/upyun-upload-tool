# upyun-upload-tool
对upyun sdk [node-sdk](https://github.com/upyun/node-sdk) 的封装。依赖[upyun@3.4.4](https://www.npmjs.com/package/upyun)，暂不适用于浏览器环境。

提供上传文件、上传文件夹、删除文件、获取文件信息、获取文件夹列表等功能。
提供上传时自动失败重试功能。

# 安装
```shell
npm install upyun-upload-tool 
```
# 使用
首先你需要一个[又拍云存储](https://console.upyun.com/services/my-upyun-service/domainsFile/)的账号，包含服务名（以前叫bucket/空间名等）、用户名（操作员）、密码。
以下提到的远程路径，如无特别说明，指又拍云服务中文件、目录的路径。

初始化：
```js
const UpYunTool = require('upyun-upload-tool');
const client = new UpYunTool({
  bucket: 'your-service-name',
  operator: 'your-user-name',
  password: 'your-password',
  console: true, // 是否展示执行过程中的一些信息
  retry: 3 // 当上传文件、生成远程目录失败时的重试次数，默认3次。
});
```

## 接口
### 上传文件 putFile
putFile(remotePath, localFile, options = {})
**注意** 这里的 localFile 是文件内容，支持String，Stream, Buffer, 而不是文件的路径。
上传文件失败时，默认重试3次，如果3次都失败，则本次上传失败。
```js
  /**
   * @param {String} remotePath - 远程文件保存路径
   * @param {String|Stream|Buffer} localFile - 需要上传的本地文件
   * @param {Object} options - 上传参数 Content-MD5 | Content-Length | Content-Type | Content-Secret | x-gmkerl-thumb | x-upyun-meta-x | x-upyun-meta-ttl 参见http://docs.upyun.com/api/rest_api/#_2
   */
client.putFile(remotePath, localFile, options = {})
.then(res => console.log(res))
.catch(error => console.log(error))
```

### 上传文件夹 putDir
上传过程会自动在远程创建文件夹，创建目录或上传文件过程如果失败，也会重试3次。
**注意**,为了上传文件夹的方便，这里localPath接收的是本地文件夹路径，会自动将里面的文件转换成stream的形式上传。
```js
/**
 * @param {String} remotePath - 远程存储路径
 * @param {String} localPath - 本地文件夹目录
*/
client.putDir(remotePath, localPath)
.then(res => console.log(res))
.catch(error => console.log(error))
```

### 删除文件 deleteFile
删除失败不会重试，业务层面可以自行处理
```js
client.deleteFile(remotePath)
.then(res => console.log(res))
.catch(error => console.log(error))
```

### 下载文件 getFile
下载保存在又拍云存储的文件，如果文件不存在返回false。
```js
  const fs = require('fs')
  const writeSream = fs.createWriteStream('./local-file-path.png');
  /**
   * 下载文件
   * @param {String} remotePath - 文件远程路径
   * @param {Stream} saveStream - 可选值，如果传递则要传递一个流，下载的文件写入该流中。
   */
  client.getFile (remotePath, writeSream)
  .then(res => console.log('download ok'))
  .catch(error => console.log(error))
```
如果不传递saveStream，则返回文件的**内容**。

### 创建目录 makeDir
创建失败也会重试3次。
```js
/**
 * @param {String} remotePath - 想创建的远程目录路径
 */
client.makeDir(remotePath)
.then(res => console.log(res))
.catch(error => console.log(error))
```

### 获取目录下文件列表
```js
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
client.listDir(remote, options = {limit: 100, order: 'asc' }).then(res => {
  // 是否要再次获取由业务层面自行处理
})
.catch(error => console.log(error))
```

### 获取文件信息 headFile
```js
client.headFile(remotePath)
.then(res => console.log(res))
.catch(error => console.log(error))
```