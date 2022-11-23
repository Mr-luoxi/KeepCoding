/*
 * @Author: luo xi
 * @Date: 2022-02-03 20:09:15
 * @LastEditTime: 2022-05-30 21:04:57
 * @LastEditors: luoxi
 * @Description:
 * @FilePath: /pnpmvue/play/main.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from "vue";
// import
// iepIcon
// from '@iep-plus/components/icon'
import { iepIcon } from "../dist/index.esm.js";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";
import "@iep-plus/theme-chalk/index.scss";

Vue.use(VueCompositionApi);
// Vue.component(Button.name, Button);
// createApp(App).mount('#app')
Vue.use(iepIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
