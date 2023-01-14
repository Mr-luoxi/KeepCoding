/*
 * @Author: luoxi
 * @Date: 2023-01-14 10:28:39
 * @LastEditTime: 2023-01-14 11:28:15
 * @LastEditors: luoxi
 * @Description:
 */
const { series, parallel } = require("gulp");
const {
  clean,
  build,
  cssTranspile,
  cssMinify,
  jsTranspile,
  jsBundle,
  jsMinify,
  publish,
} = require("./createTask");

const { streamTask } = require("./stream");
const { promiseTask } = require("./promise");
const { eventEmitterTask } = require("./eventEmitter");
const { childProcessTask } = require("./childProcess");
const { observableTask } = require("./observable");
const { callbackTask, cbErrorTask, passingCallBack } = require("./cb");
const { asyncAwaitTask } = require("./async");
// 对于希望以最大并发来运行的任务（tasks），可以使用 parallel() 方法将它们组合起来。
// 如果需要让任务（task）按顺序执行，请使用 series() 方法。
exports.default = series(
  clean,
  build,
  streamTask,
  promiseTask,
  childProcessTask,
  eventEmitterTask,
  observableTask,
  callbackTask,
  // cbErrorTask,
  passingCallBack,
  asyncAwaitTask,
  parallel(cssTranspile, series(cssMinify, jsTranspile)),
  parallel(jsBundle, jsMinify),
  publish
);
