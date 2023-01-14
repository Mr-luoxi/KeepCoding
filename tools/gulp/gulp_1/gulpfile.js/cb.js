/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:24:22
 * @LastEditTime: 2023-01-14 11:25:42
 * @LastEditors: luoxi
 * @Description:
 */
const fs = require("fs");
function callbackTask(cb) {
  cb();
}

function cbErrorTask(cb) {
  cb(new Error("error"));
}

function passingCallBack(cb) {
  fs.access("gulpfile.js", cb);
}

exports.callbackTask = callbackTask;
exports.cbErrorTask = cbErrorTask;
exports.passingCallBack = passingCallBack;
