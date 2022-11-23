/*
 * @Author: luo xi
 * @Date: 2022-05-04 16:52:21
 * @LastEditTime: 2022-07-08 16:53:22
 * @LastEditors: luoxi
 * @Description:
 * @FilePath: /pnpmvue/build/utils/path.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { resolve } from "path";

// 项目根目录
export const ProjectRoot = resolve(__dirname, "../../");

// 打包输出目录
export const outDir = resolve(__dirname, "../../dist");
export const epOutPut = resolve(outDir, "iep-plus");

// iep-plus 入口 index.ts
export const inDir = resolve(__dirname, "../../packages/iep-plus");

// 组件目录
export const buildRoot = resolve(ProjectRoot, "build");
export const pkgRoot = resolve(ProjectRoot, "packages");
export const epRoot = resolve(pkgRoot, "iep-plus");
export const componentRoot = resolve(pkgRoot, "components");
export const epPackage = resolve(componentRoot, "package.json");
