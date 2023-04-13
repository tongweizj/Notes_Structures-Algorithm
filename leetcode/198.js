/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 0) return null;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return nums[0] > nums[1] ? nums[0] : nums[1];
  var res = 0;
  var miorr = [];
  for (var jump = 2; jump <= nums.length - 1; jump++) {
    console.log(jump);
    miorr = [...nums];
    for (var i = 0; i < nums.length; i++) {
      if (i <= nums.length - 1 - jump) {
        miorr[i + jump] = miorr[i + jump] + miorr[i];
      }
      res = res < miorr[i] ? miorr[i] : res;
      console.log(miorr);
    }
  }
  return res;
};
var nums = [4, 1, 2, 7, 5, 3, 1];
let out = rob(nums);
console.log(out);
