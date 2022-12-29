/*
 * @Author: luo xi
 * @Date: 2022-05-04 16:51:54
 * @LastEditTime: 2022-12-29 22:21:48
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/pnpmvue/build/gulpfile.babel.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 打包方式 串行{series} 并行{parallel}
import {
  series,
  parallel
} from "gulp";
import {
  withTaskName,
  run,
  runTask
} from './utils/index.js'

// gulp 不叫打包，叫做代码转化 vite

/**
 * 1. 打包样式
 * 2. 打包工具方法
 * 3. 打包所有组件
 * 4. 打包每个组件
 * 5. 生成一个组件库
 * 6. 发布组件
 */
export default series(
  withTaskName('clean', async() => run('pnpm run clean')), // 删除dist目录
  // 并行执行packages目录下的build脚本
  parallel(runTask('buildFullEntry')),
  // 并行执行packages目录下的components脚本
  parallel(runTask('buildModules'))
);

export * from './tasks/full-bundle'
export * from './tasks/modules'