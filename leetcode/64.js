/**
 * 64. Minimum Path Sum
 * https://leetcode.com/problems/minimum-path-sum/
 * Medium
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right,
 * which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if ((grid[0].length == 1) & (grid.length == 1)) return grid[0][0];
  var m = grid.length;
  var n = grid[0].length;
  var dp = new Array(m).fill(new Array(n).fill(0));
  for (var x = 0; x < n; x++) {
    for (var y = 0; y < m; y++) {
      if (x == 0 && y == 0) {
        dp[x][y] = grid[x][y];
      } else if (x == 0) {
        dp[x][y] = dp[x][y - 1] + grid[x][y];
      } else if (y == 0) {
        dp[x][y] = dp[x - 1][y] + grid[x][y];
      } else {
        dp[x][y] =
          (dp[x][y - 1] > dp[x - 1][y] ? dp[x - 1][y] : dp[x][y - 1]) +
          grid[x][y];
      }
    }
  }
  return dp[n - 1][m - 1];
};

var gird = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
var out = minPathSum(gird);
console.log(out);
