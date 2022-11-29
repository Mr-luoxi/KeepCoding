/*
 * @Author: luo xi
 * @Date: 2022-10-29 23:53:40
 * @LastEditTime: 2022-11-29 20:00:55
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/projects/mac-os/src/router/route.async.ts
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
    redirect: '/bootup',
    // component: () => import('@/views/home/index.vue'),
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
