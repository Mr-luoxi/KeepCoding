/*
 * @Author: luo xi
 * @Date: 2023-01-11 21:05:15
 * @LastEditTime: 2023-01-11 23:25:03
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/vuepress-starter/docs/.vuepress/client.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineClientConfig } from "@vuepress/client";
// import Home from "./Layouts/Home.vue";
// import List from "./Layouts/List.vue";
import Layout from "./Layouts/Layout.vue";

export default defineClientConfig({
  extends: '@vuepress/theme-default',
  enhance({ app, router, siteData }) {
    // console.log(app.pages);
  },
  layouts: {
    // Home,
    // List,
    Layout,
  },
  rootComponents: [],
});
