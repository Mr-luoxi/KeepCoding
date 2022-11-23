/*
 * @Author: luo xi
 * @Date: 2022-04-30 00:08:36
 * @LastEditTime: 2022-11-23 20:54:24
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/pnpmvue/play/vite.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// import {
//   createVuePlugin
// } from "vite-plugin-vue2";
// import {
//   defineConfig
// } from "vite";

// export default defineConfig({
//   plugins: [createVuePlugin()]
// })

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
