/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:14:00
 * @LastEditTime: 2023-01-14 11:17:43
 * @LastEditors: luoxi
 * @Description:
 */
const { exec } = require("child_process");
function childProcessTask() {
  return exec("ls -la");
}

exports.childProcessTask = childProcessTask;
