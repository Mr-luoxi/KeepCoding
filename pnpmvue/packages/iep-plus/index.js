/*
 * @Author: luoxi
 * @Date: 2022-05-05 17:28:38
 * @LastEditTime: 2022-05-09 20:32:42
 * @LastEditors: luoxi
 * @Description:
 */
import * as components from "@iep-plus/components";

const install = (app) => {
  // 每个组件在写的时候都提供了install方法

  // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
  // components.forEach((component) => app.use(component));

  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

// app.use(iep-plus)
export default {
  install,
};

// import { WIcon } from 'w-plus
export * from "@iep-plus/components";
