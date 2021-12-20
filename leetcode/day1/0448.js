// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
function main(nums) {
  for (let i = 0; i < nums.length; i++) {
    //[4,3,2,7,8,2,3,1] 元素值-1 作为下标
    nums[nums[i] - 1] = -nums[i];
  }
  console.log(nums);
}
main(nums);
