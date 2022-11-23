/*
 * @Author: luo xi
 * @Date: 2022-05-04 21:15:30
 * @LastEditTime: 2022-07-08 16:47:44
 * @LastEditors: luoxi
 * @Description: 按需打包
 * @FilePath: /pnpmvue/build/tasks/modules.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { excludeFiles, generateExternal, writeBundle } from "../utils/index";
import { pkgRoot, epRoot } from "../utils/path";
import glob from "fast-glob";
import { rollup } from "rollup";
import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve"; // 处理文件路径
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { target } from "../utils/config";
import { buildConfigEntries } from "./build-info";

export const buildModules = async () => {
  // 获取package文件夹下的文件
  const input = excludeFiles(
    await glob("**/*{js,ts,vue}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );

  const bundle = await rollup({
    input,
    plugins: [
      vue({
        isProduction: false,
      }),
      // vueJsx(),
      nodeResolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          ".vue": "js",
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  });

  await writeBundle(
    bundle,
    buildConfigEntries.map(([module, config]) => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === "cjs" ? "named" : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      };
    })
  );
};
