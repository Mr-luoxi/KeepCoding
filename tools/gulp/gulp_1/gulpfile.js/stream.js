/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:03:10
 * @LastEditTime: 2023-01-14 11:05:39
 * @LastEditors: luoxi
 * @Description:
 */
const { src, dest } = require("gulp");

function streamTask() {
  return src("*.js").pipe(dest("output"));
}

exports.streamTask = streamTask;
