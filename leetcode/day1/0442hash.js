let nums = [4, 3, 2, 7, 8, 2, 3, 1];
function main(arr) {
  let map = {};

  arr.forEach((a) => {
    if (!map[a]) {
      map[a] = 1;
    } else {
      map[a]++;
    }
  });

  //calc

  return Object.keys(map).filter((key) => map[key] == 2);
}

//Time O(n)
//Space O(n)

//要求是 Time O(n) Space O(1) 就应该想到指针了
console.log(main(nums)); //[ '2', '3' ]
console.log(main([1])); //[]
console.log(main([1, 1, 2])); //['1']
