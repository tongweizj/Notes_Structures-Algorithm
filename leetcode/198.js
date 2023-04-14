/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  var n = nums.length;
  var dp = new Array(n + 1).fill(0); // 为什么是 n+1,因为抢完第 n 家的结果,要存在 n+1 位
  dp[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2]);
  }
  /**
   * dp[i-1] 选它, 代表 nums[i-1] 这家不抢
   * nums[i - 1] + dp[i - 2],选他,代码抢 nums[i-1] 和 nums[i-3]等
   */
  return dp[n];
};

/**
 * 优化 dp: 空间复杂度
 */
var rob2 = function (nums) {
  if (!nums.length) return 0;
  var n = nums.length;
  var pre2 = 0,
    pre1 = 0,
    cur;
  for (let i = 0; i < n; i++) {
    cur = Math.max(pre1, nums[i] + pre2);
    pre2 = pre1;
    pre1 = cur;
  }
  return cur;
};

var nums = [4, 1, 2, 7, 5, 3, 1];
let out = rob2(nums);
console.log(out);
