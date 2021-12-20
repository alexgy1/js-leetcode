/**
 * 什么是高阶函数
 *  1. 函数里面的参数是函数
 *  2. 或者 函数的返回值是函数
 *
 * es6里面没有arguments
 *
 * ...args代替
 *
 * 箭头函数可以解决this指向的问题
 */

function say(a, b) {
  console.log("say", a, b);
}

Function.prototype.before = function (cb) {
  return (...args) => {
    cb();
    this(...args);
  };
};

let beforeFn = say.before(() => {
  console.log("before ");
});

beforeFn("hello", "world");
