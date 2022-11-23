/*
 * @Author: luo xi
 * @Date: 2022-05-04 21:15:30
 * @LastEditTime: 2022-07-08 15:52:52
 * @LastEditors: luoxi
 * @Description: 打完整文件
 * @FilePath: /pnpmvue/build/tasks/modules.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { inDir, outDir } from "../utils/path";
import { excludeFiles, generateExternal, writeBundle } from "../utils/index";
import { nodeResolve } from "@rollup/plugin-node-resolve"; // 处理文件路径
import vue from "rollup-plugin-vue";
import glob from "fast-glob";
import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { resolve } from "path";

export const buildFullEntry = async () => {
  const input = excludeFiles(
    // 匹配需要打包的文件 js vue ts
    await glob("**/*.{js,ts,vue}", {
      cwd: inDir,
      absolute: true,
      onlyFiles: true,
    })
  );
  console.log(input, "input");
  const bundle = await rollup({
    input: input,
    plugins: [nodeResolve(), vue(), commonjs()],
    // external: ['vue', 'vue-router', 'axios', 'vuex', 'element-ui', 'lodash', 'echarts', 'v-charts', 'qs'],
    external: await generateExternal({ full: false }),
    treeshake: false,
  });

  const buildConfig = [
    {
      format: "umd", // 打包的格式
      file: resolve(outDir, "index.js"),
      name: "iepPlus", // 全局变量名字
      exports: "named", // 导出的名字 用命名的方式导出 libaryTarget:"" name:""
      globals: {
        // 表示使用的vue是全局的
        vue: "Vue",
      },
    },
    {
      format: "esm",
      file: resolve(outDir, "index.esm.js"),
    },
  ];

  return Promise.all(
    buildConfig.map((option) => {
      bundle.write(option);
    })
  );
};
