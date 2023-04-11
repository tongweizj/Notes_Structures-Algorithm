/**
 * ver 1: 仅递归
 * 问题: N>20 后,速度非常慢
 * 为什么? 因为大量的冗余计算
 * 例如
 * fib(20) = fib(19)+fib(18)
 * fib(19) = fib(18)+fib(17)
 * 显然 fib(18) 被计算两次,但显然重复计算是巨大的
 * @param {*} N
 * @return {*}
 */
function fib(N) {
  if (N == 1 || N == 2) return 1;
  return fib(N - 1) + fib(N - 2);
}
// let n = 60;
// let out = fib(n);
// console.log(out);

/**
 * ver2: 用动态规划的思维: 增加备忘录
 */

function fib2(N) {
  // 备忘录全初始化为 0
  let memo = new Array(N + 1).fill(0);
  // 进⾏带备忘录的递归
  return helper(memo, N);
}
function helper(memo, n) {
  // base case
  if (n == 0 || n == 1) return n;
  // 已经计算过，不⽤再计算了
  if (memo[n] != 0) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}

/**
 * ver3: dp 数组的迭代（递推）解法
 */
function fib3(N) {
  if (N == 0) return 0;
  let dp = new Array(N + 1).fill(0);
  // base case
  dp[0] = 0;
  dp[1] = 1;
  // 状态转移
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
}

/**
 * ver3: dp 数组的迭代解法+优化空间复杂度
 */
function fib4(n) {
  if (n == 0 || n == 1) {
    // base case
    return n;
  }
  // 分别代表 dp[i - 1] 和 dp[i - 2]
  let dp_i_1 = 1,
    dp_i_2 = 0;
  for (let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    let dp_i = dp_i_1 + dp_i_2;
    // 滚动更新
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i_1;
}
let n = 200;
let out = fib3(n);
console.log(out);
