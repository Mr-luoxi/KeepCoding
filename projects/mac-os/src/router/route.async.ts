/*
 * @Author: luo xi
 * @Date: 2022-10-29 23:53:40
 * @LastEditTime: 2022-10-30 10:04:12
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /interview-2022/macOs/my-vitecamp-app/src/router/route.async.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/process',
    name: 'process',
    meta: {
      title: 'Template configuration process',
      icon: '',
    },
    component: () => import('@/views/example/MarkdownPage.vue'),
  },
  {
    path: '/bootup',
    name: 'bootup',
    meta: {
      title: '开机',
      icon: '',
    },
    component: () => import('@/views/desk/BootUp.vue'),
  },
];

export default asyncRoutes;
