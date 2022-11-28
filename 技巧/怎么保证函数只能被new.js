/*
 * @Author: luo xi
 * @Date: 2022-11-28 17:11:26
 * @LastEditTime: 2022-11-28 17:19:13
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/技巧/怎么保证函数只能被new.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 方法一
function Person() {
  // console.log(this, "this");
  if(!(this instanceof Person)){
    throw new TypeError('只能通过new 来调用函数！')
  }
  this.name = "John";
}

const per = new Person();
// const perFunc = Person();

// console.log(per, perFunc);

// 方法二 ES6 为 new 命令引入了一个 new.target 属性，该属性一般用在构造函数之中，
// 返回 new 命令作用于的那个构造函数。如果构造函数不是通过 new 命令或 Reflect.construct() 调用的，
// new.target 会返回 undefined ，因此这个属性可以用来确定构造函数是怎么调用的。
function Demo() {
  console.log(new.target);
  if(!new.target){
    throw new Error('只能通过new 来调用函数！')
  }
}
const demo = new Demo();
const demoFunc = Demo();

console.log(demo, demoFunc);