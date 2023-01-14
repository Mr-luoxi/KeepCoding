/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:11:20
 * @LastEditTime: 2023-01-14 11:12:35
 * @LastEditors: luoxi
 * @Description:
 */
const { EventEmitter } = require("events");

// 处理任务 当任务完成之后 在继续后续操作
function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => {
    emitter.emit("finish");
  }, 2000);
  return emitter;
}

exports.eventEmitterTask = eventEmitterTask;
