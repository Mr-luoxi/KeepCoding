/*
 * @Author: luo xi
 * @Date: 2022-11-25 16:08:43
 * @LastEditTime: 2022-11-27 11:13:06
 * @LastEditors: luo xi
 * @Description: 单例模式
 * @FilePath: /KeepCoding/设计模式/单例模式/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @description: 标准单例模式
 * @return {*}
 */

const SingleInstance = function (name) {
  this.name = name;
  this.instance = null;
};

SingleInstance.prototype.getName = function () {
  console.log(this.name);
};

SingleInstance.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new SingleInstance(name);
  }
  return this.instance;
};

var a = SingleInstance.getInstance("xiao a");
var b = SingleInstance.getInstance("xiao b");

console.log(a.prototype === b.prototype, a === b);

/**
 * @description: 惰性通用单例
 * @return {*}
 */
const getSingle = (fn) => {
  let result;
  return () => result || (result = fn.apply(this, arguments));
};

const createLogin = () => { 
  var div = document.createElement("div");
  div.innerHTML = "登陆"
  div.style.display = 'none'
  document.body.append(div)
  return div
}

var createLoginInstance = getInstance(createLogin)

document.getElementById('loginBtn').onclick = () => { 
  const login = createLoginInstance()
  login.style.display = block
}


// 使用场景
// 1. vuex
// 1.1 vuex4
// export function createStore (options) {
//   return new Store(options)
// }
// 1.2 vuex3
// export function install (_Vue) {
//   if (Vue && _Vue === Vue) {
//     if (process.env.NODE_ENV !== 'production') {
//       console.error(
//         '[vuex] already installed. Vue.use(Vuex) should be called only once.'
//       )
//     }
//     return
//   } 
//   Vue = _Vue
//   applyMixin(Vue)
// }