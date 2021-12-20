// Time Complexcity - O(N*N)
// Space Complexcity - O(1)
function main(arr) {
  let res = [];
  console.time("111");
  for (let i = 0; i < arr.length; i++) {
    //find i+1 index
    for (let j = i + 1; j < arr.length; j++) {
      console.log("i, j", arr[i], arr[j]);
      //   if (arr[i] !== arr[j]) continue;
      //   else {
      //     res.push(arr[i]);
      //     break;
      //   }
      if (arr[i] == arr[j]) {
        res.push(arr[i]);
        break;
      }
    }
  }
  //   console.timeEnd("111"); //111: 5.684ms
  //   console.timeEnd("111"); //111: 5.511ms without break
  console.timeEnd("111"); //111: 5.72ms with break

  return res;
}

console.log(main([4, 3, 2, 7, 8, 2, 3, 1])); //[ 3, 2 ]
console.log(main([1, 1, 2])); //[1]
console.log(main([1])); //[1]
