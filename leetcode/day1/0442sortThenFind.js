// function main(arr) {
//   //边界情况处理
//   if (arr.length < 2) return [];
//   //数组里面的元素是number 的情况 默认排序后升序

//   arr = arr.sort();

//   let cur = arr[0],
//     res = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == cur) {
//       res.push(cur);
//     }
//     cur = arr[i];
//   }
//   //   console.log("res", res);
//   return res;
// }

function main(arr) {
  //边界情况处理
  if (arr.length < 2) return [];
  //数组里面的元素是number 的情况 默认排序后升序

  arr = arr.sort();
  let res = [];
  //这里要写成 arr.length 不能写成arr.length-1 不然最后一位取不到 但是这样 最后一个arr [i+1] undefined 要注意
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      res.push(arr[i]);
    }
  }
  console.log("res", res);
  return res;
}

console.log(main([4, 3, 2, 7, 8, 2, 3, 1])); //[2,3]
console.log(main([1, 1, 2])); //[1]
console.log(main([1])); //[]
