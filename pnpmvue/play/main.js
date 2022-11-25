/*
 * @Author: luo xi
 * @Date: 2022-02-03 20:09:15
 * @LastEditTime: 2022-11-25 11:22:40
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/play/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from "vue";
import
iepIcon
from '@iep-plus/components/icon'
// import { iepIcon } from "../dist/iep-plus/es/index.mjs";
import App from "./App.vue";
// import VueCompositionApi from "@vue/composition-api";
import "@iep-plus/theme-chalk/index.scss";

const app = createApp(App)
console.log(iepIcon,'iepIcon')
// Vue.use(VueCompositionApi);
// Vue.component(Button.name, Button);
// createApp(App).mount('#app')
app.use(iepIcon);
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

app.mount('#app')