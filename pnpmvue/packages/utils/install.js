/*
 * @Author: luo xi
 * @Date: 2022-04-30 22:53:02
 * @LastEditTime: 2022-04-30 23:12:50
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /pnpmvue/packages/utils/install.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
export const install = (component) => {
  component.install = (Vue) => {
    Vue.component(component.name, component)
  }
  return component
}