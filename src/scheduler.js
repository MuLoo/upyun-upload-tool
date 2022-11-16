/**
 * 并发任务控制器.
 *  设置最大并发个数，其他的任务则在某个任务执行完成后继续执行。
 */
 /**
 * 并发任务控制器.
 *  设置最大并发个数，其他的任务则在某个任务执行完成后继续执行。
 */
const EventEmitter = require('events');
const { clearTimeout } = require('timers');

class Scheduler extends EventEmitter {
    constructor (props = {}) {
      super(props)
      const { size = 6, start = true, interval = null } = props || {};
			this._start = start;
      this._size = size;
			this._interval = interval;
      this._sizeMemorized = size;
      this._queue = [];
      this._shoulStop = false;
			this._timeoutId = null;
			this._lastRan = Date.now();
    }
    addTask (task) {
			return (...params) => {
					// 快捷生成一个uuid
				const uuid = Math.random().toString(36).slice(2)
				const promise = new Promise((resolve) => {
					// 存起来
					this.pushTask({
						resolve,
						task,
						params,
						uuid
					})
					if (this._start) {
						this.startTask();
					}
				});
				// 如果还未执行，则跳过，返回true，已经执行了，返回false。
				const skipTask = () => {
					// 从队列中找到uuid的任务，删除掉。 如果队列中已经没有了，说明已经被执行了
					const index = this._queue.findIndex(item => item.uuid === uuid);
					if (index < 0)  return false;
					this._queue.splice(index, 1);
					return true;
				}
				return [promise, skipTask]
			}
    }
		startTask () {
			// 区分是否要一个个间隔上传
			if (this._interval) {
				// 只启动一个即可
				if (!this._timeoutId && this._size > 0) {
					if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');
					const { resolve: taskResolve, task: taskFunc, params: taskParams } = this.getTask();
					taskResolve(this.executeTask(taskFunc, taskParams))
				}
			} else {
				// 满足条件取出来执行
				if (this._size > 0) {
					if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');
					const { resolve: taskResolve, task: taskFunc, params: taskParams } = this.getTask();
					taskResolve(this.executeTask(taskFunc, taskParams))
				}
			}
		}
		// 当没有选择自动启动任务时，此方法交给用户手动调用
		dequeue() {
			if (this._start) return;
			if (this._interval) {
				if (!this._timeoutId && this._size > 0) {
					if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');
					const { resolve: taskResolve, task: taskFunc, params: taskParams } = this.getTask();
					taskResolve(this.executeTask(taskFunc, taskParams))
				}
			} else {
				while (this._size > 0) {
					if (this._queue.length && this._size === this._sizeMemorized) this.emit('start');
					const { resolve: taskResolve, task: taskFunc, params: taskParams } = this.getTask();
					taskResolve(this.executeTask(taskFunc, taskParams))
				}
			}
		}
    pushTask(obj) {
      if (!obj.resolve || !obj.task) return;
      this._queue.push(obj)
    }
    getTask() {
      if (this._queue.length <= 0 || this._size <= 0) return;
      // 取出任务说明要执行了，这时候控制并发的标志位应该减1
      if (this._size > 0) this._size--;
      // 返回头部的那个，与push进来的顺序对应
      return this._queue.shift();
    }
    executeTask (task, params) {
      if (this._shouldStop) return Promise.resolve();
			if (this._interval && Number(this._interval) > 0) {
				const timeout = Math.max(0, this._interval - (Date.now() - this._lastRan));
				return new Promise((resolve, reject) => {
					clearTimeout(this._timeoutId)
					this._timeoutId = setTimeout(() => {
						this._lastRan = Date.now();
						const promise = Promise.resolve(task(...params));
						// 无论成功还是失败，都算是该任务执行完了
						promise.then((res) => {
							this.emit('resolve', res);
							resolve(res);
						}).catch(err => {
							this.emit('reject', err);
							reject(err)
						}).finally(() => {
							this._size++;
							console.log(this._queue.length, this._size, this._sizeMemorized)
							if (this._queue.length === 0 && this._size === this._sizeMemorized) return this.emit('end');
							// 执行下一个任务
							this.nextTask();
						})
					}, timeout)
				})
			} else {
				const promise = Promise.resolve(task(...params));
				promise.then((res) => {
					this.emit('resolve', res);
				}).catch(err => {
					this.emit('reject', err);
				}).finally(() => {
					this._size++;
					if (this._queue.length === 0 && this._size === this._sizeMemorized) return this.emit('end');
					// 执行下一个任务
					this.nextTask();
				})
				return promise;
			}
    }
    nextTask () {
        if (this._queue.length <= 0 || this._size <= 0) return;
        const { resolve, task, params } = this.getTask();
        resolve(this.executeTask(task, params))
    }
    isQueueing () {
      return this._size <= 0;
    }
    clearTask() {
			clearTimeout(this._timeoutId);
      this._shouldStop = true;
      this._queue = [];
      this.size = this._sizeMemorized;
      this.emit('stop');
    }
  }

  // // 使用示例
  // // 1. 10个异步任务，每3个并发执行
  // const scheduler = new Scheduler();
  // scheduler.on('start', () => {
  //   console.log('here we go', Date.now());
  // })
  // scheduler.on('resolve', (res) => {
  //   console.log('one task complete', Date.now(), res);
  // })
	// scheduler.on('reject', (err) => {
	// 	console.log('opps, error !!!', Date.now(), err);
	// })
  // scheduler.on('end', () => {
  //   console.log('yes, this is end', Date.now());
  // })
  // scheduler.on('stop', () => {
  //   console.log('yes, you stopped', Date.now());
  // })
  // const taskFunc = (e, index) => {
	// 	// 同步的
	// 	// console.log(`执行了第 ${index+1}个`)
	// 	// return `第${index+1}个`
	// 	// 异步的
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(`执行了第 ${index+1}个`)
	// 			if (index === 3) return reject(Error('error !'))
  //       resolve(`第${index+1}个`)
  //     }, 2000 )
  //   })
  // }
  // Array(10).fill(1).forEach((e, index) => {
  //     const [result, skipTask] = scheduler.addTask(taskFunc)(e, index)
  //     result.then(res => console.log('拿到res --', index+1, res, Date.now())).catch(err => {
  //         console.log('抓到error', index+1, err)
  //     })
  // })

  // // setTimeout(() => {
	// // 	scheduler.dequeue();
	// // }, 1000)


module.exports =  Scheduler;

