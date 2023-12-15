/** 413. Arithmetic Slices
 * Medium
 * 概念: arithmetic 等差数列
 * An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
 * For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
 * Given an integer array nums, return the number of arithmetic subarrays of nums.
 *
 * 概念:subarray 连续子数列
 * A subarray is a contiguous subsequence of the array.
 *
 * 因为是要找多少个连续子序列,
 * 这道题可以分解成两个子问题
 * 有多少子序列
 * 其中多少事等差序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
  var dp = new Array(nums.length).fill(0);
  for (var i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  var count = 0;
  for (var j = 0; j < dp.length; j++) {
    count += dp[j];
  }
  return count;
};
