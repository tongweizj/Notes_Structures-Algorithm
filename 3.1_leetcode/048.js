/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 1. 仔细观察旋转之后，所有数值变换的规律
//    我在做的时候，只看到了一个，它应该一圈一起观察
var rotate = function (M) {
  let n = M.length,
    depth = ~~(n / 2);
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1,
      opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      let temp = M[i][i + j];
      M[i][i + j] = M[opp - j][i];
      M[opp - j][i] = M[opp][opp - j];
      M[opp][opp - j] = M[i + j][opp];
      M[i + j][opp] = temp;
    }
  }
};
