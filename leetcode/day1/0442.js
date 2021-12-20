//https://leetcode.com/problems/find-all-duplicates-in-an-array/
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
function main(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let idx = Math.abs(arr[i]) - 1;
    if (arr[idx] < 0) {
      res.push(arr[idx]);
    }
    arr[idx] *= -1;
  }

  console.log(arr, "arr");
  console.log("res", res);
}

main([4, 3, 2, 7, 8, 2, 3, 1]);
