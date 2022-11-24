/*
 * @Author: luo xi
 * @Date: 2022-11-24 20:57:20
 * @LastEditTime: 2022-11-24 21:30:16
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/autoPush/push.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { exec } = require("./sh.js");
// https://github.com/tj/commander.js node 解析命令行
const { program } = require("commander");
/**
 * @description: 发布
 * @return {*}
 */
const publish = async () => {
  // 获取命令行分支 默认是master
  program
    .option("-m, --branch <type>", "git branch")
    .option("-l, --log <type>", "push logs");
  // .option("-p, --pizza-type <type>", "flavour of pizza");
  program.parse(process.argv);
  const options = program.opts();
  console.log(options);
  const branch = options.branch || "master";
  const log = options.log || "auto push at" + new Date();
  try {
    await exec("git status");
    await exec("git add .");
    await exec("git commit -m" + log + '##autoPush');
    await exec("git pull origin master");
    await exec("git push fork" + branch);
    console.log('git finished');
  } catch (e) {
    console.log("push failed" + e);
  }
};

publish();
