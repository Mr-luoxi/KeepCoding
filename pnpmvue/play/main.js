/*
 * @Author: luo xi
 * @Date: 2022-02-03 20:09:15
 * @LastEditTime: 2022-12-28 22:58:42
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/play/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from "vue";
import iepIcon from "@iep-plus/components/icon";
import timeFlip, { timeBlock } from "@iep-plus/components/timeFlip";
import App from "./App.vue";
// 引入scc 文件
import "@iep-plus/theme-chalk/index.scss";

const app = createApp(App);

app.use(iepIcon);
app.use(timeFlip);
app.use(timeBlock);

app.mount("#app");
