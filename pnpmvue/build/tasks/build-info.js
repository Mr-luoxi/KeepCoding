/*
 * @Author: luoxi
 * @Date: 2022-07-08 15:52:50
 * @LastEditTime: 2022-07-08 16:51:10
 * @LastEditors: luoxi
 * @Description:
 */
import { PKG_NAME } from "../utils/config";
import { epOutPut } from "../utils/path";
import path from "path";

export const buildConfig = {
  //  `es`: ES module 规范, 可用 Webpack, Rollup 加载
  esm: {
    module: "ESNext",
    formats: "esm",
    ext: "mjs",
    output: {
      name: "es",
      path: path.resolve(epOutPut, "es"),
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    },
  },
  // `cjs`: Node 默认的模块规范, 可通过 Webpack 加载
  cjs: {
    modle: "CommonJS",
    format: "cjs",
    ext: "js",
    output: {
      name: "cjs",
      path: path.resolve(epOutPut, "lib"),
    },
    build: {
      path: `${PKG_NAME}/es`,
    },
  },
};

export const buildConfigEntries = Object.entries(buildConfig);
