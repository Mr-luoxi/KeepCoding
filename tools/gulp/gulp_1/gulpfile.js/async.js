/*
 * @Author: luoxi
 * @Date: 2023-01-14 11:27:04
 * @LastEditTime: 2023-01-14 11:29:58
 * @LastEditors: luoxi
 * @Description:
 */
const fs = require("fs");

async function asyncAwaitTask() {
  // toString buffer 转换字符串
  // 字符串 转换到 JSON
  const { version } = JSON.parse(fs.readFileSync("package.json").toString());
  console.log(version);
  await Promise.resolve("some default");
}

exports.asyncAwaitTask = asyncAwaitTask;
