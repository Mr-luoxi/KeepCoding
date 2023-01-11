/*
 * @Author: luo xi
 * @Date: 2023-01-11 21:30:05
 * @LastEditTime: 2023-01-11 22:39:16
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/vuepress-starter/docs/.vuepress/theme/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defaultTheme } from "vuepress";
import { path } from "@vuepress/utils";

module.exports = (options) => {
  return {
    name: "vuepress-theme-local",
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    },
  };
};
