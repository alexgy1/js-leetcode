/**
    函数柯里化 和反柯里化 

    为什么需要

    判断对象类型 4种 
    1 typeof 不能区分对象类型
    2 constructor 可以找到这个对象是通过谁构造出来的
    [].constructor
    ({}).constructor
    3 instanceof 判断是谁的实例的作用 有时候不准确 __proto__
    4 Object.prototype.toString.call()缺点就不能区分谁是谁的实例


*/

//判断对象类型
function isType(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

// console.log(isType(1, "Number"));
// console.log(isType("123", "String"));
// console.log(isType([], "Array"));
// console.log(isType({}, "Object"));

//柯里化
// function isType(type) {
//   return function (value) {
//     return Object.prototype.toString.call(value) === `[object ${type}]`;
//   };
// }

let isArray = isType("Array");

console.log(isArray([]));
console.log(isArray({}));

//通用的柯里化函数

let curring = (fn, arr = []) => {
  return function (...args) {
    let len = fn.length;
    if (arr.length < len) {
      arr = [...arr, ...args];
      return curring(fn, arr);
    } else {
      return fn(...arr);
    }
  };
};
