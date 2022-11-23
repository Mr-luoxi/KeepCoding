/*
 * @Author: luo xi
 * @Date: 2022-05-04 16:52:16
 * @LastEditTime: 2022-05-09 20:09:42
 * @LastEditors: luoxi
 * @Description:
 * @FilePath: /pnpmvue/build/utils/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * 子进程
 * child_process.spawn(command[, args][, options])
 * command <string> 要运行的命令。
 * args <string[]> 字符串参数列表。
 * options <Object>
 *  - cwd <string> | <URL> 子进程的当前工作目录
 *  - stdio <Array> | <string> 子进程的标准输入输出配置。'inherit'：通过相应的标准输入输出流传入/传出父进程
 * - shell <boolean> | <string> 如果是 true，则在 shell 内运行 command。 在 Unix 上使用 '/bin/sh'，在 Windows 上使用    process.env.ComSpec。 可以将不同的 shell 指定为字符串。 请参阅 shell 的要求和默认的 Windows shell。 默认值: false （没有 shell）x
 */
import { spawn } from "child_process";
import { ProjectRoot, buildRoot, epPackage } from "./path.js";
import consola from "consola";
import chalk from "chalk";

// 自定义每个task的name
export const withTaskName = (taskName, fn) => {
  return Object.assign(fn, {
    displayName: taskName,
  });
};

// 在node中开启一个子进程来运行脚本
export const run = async (command, buildRoot = ProjectRoot) =>
  new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    consola.info(`run: ${chalk.green(`${cmd} ${args.join(" ")}`)}`);
    const app = spawn(cmd, args, {
      cwd: buildRoot,
      stdio: "inherit",
      // 默认情况下 linux才支持 rm -rf  windows安装git bash
      shell: process.platform === "win32",
    });
    // 在进程已结束并且子进程的标准输入输出流已关闭之后，则触发 'close' 事件
    const onProcessExit = () => app.kill("SIGHUP");
    app.on("close", (code) => {
      process.removeListener("exit", onProcessExit);
      if (code === 0) resolve();
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        );
    });
    process.on("exit", onProcessExit);
  });

// 运行任务
export const runTask = (name) =>
  withTaskName(`shellTask:${name}`, () =>
    run(`pnpm run start ${name}`, buildRoot)
  );

// 需要排除的文件
export const excludeFiles = (files) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

// 获取依赖文件
export const getPackageDependencies = (pkgPath) => {
  const manifest = require(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};

// 创建不需要打包的依赖文件
export const generateExternal = async (options) => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage);

  return (id) => {
    const packages = peerDependencies;
    if (!options.full) {
      packages.push("@vue", ...dependencies);
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

// 打包bundle文件的方法
export const writeBundle = (bundle, options) => {
  return Promise.all(options.map((option) => bundle.write(option)));
};
