/*
 * @Author: luoxi
 * @Date: 2023-01-14 10:24:28
 * @LastEditTime: 2023-01-14 10:24:31
 * @LastEditors: luoxi
 * @Description:
 */
function defaultTask(cb) {
  console.log("执行任务");
  cb();
}

exports.default = defaultTask;
