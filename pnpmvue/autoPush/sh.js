/*
 * @Author: luo xi
 * @Date: 2022-11-24 20:42:59
 * @LastEditTime: 2022-11-24 21:01:46
 * @LastEditors: luo xi
 * @Description: shell命令
 * @FilePath: /KeepCoding/pnpmvue/autoPush/sh.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const shell = require("shelljs");

const promiseShell = (command, params) => {
  return new Promise((resolve, reject) => {
    const code = shell[command](params).code;
    if (code === 0) {
      resolve();
      return;
    }
    reject("exec error: " + code);
  });
};

/**
 * @description: 执行命令
 * @param {*} params
 * @return {*}
 */
const exec = (params) => {
  return promiseShell("exec", params);
};

/**
 * @description: 进入文件夹
 * @param {*} params
 * @return {*}
 */
const cd = (params) => {
  return promiseShell("cd", params);
};

/**
 * @description: 删除文件
 * @return {*}
 */
const rm = (params) => {
  return promiseShell("rm", params);
};

// cd("/bin").then((value) => {
//   exec("ls -la");
// });

module.exports = {
  exec,
  cd,
  rm,
};
