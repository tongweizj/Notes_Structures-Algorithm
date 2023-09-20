/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/*

basic idea -->
populate cells reached from atlantic and cells reached from pacific with dfs
loop through matrix
add coords to return array if they exist in both the atlantic matrix and the pacific matrix
return result
基本思路 -->
使用深度优先搜索填充从大西洋到达的单元格和从太平洋到达的单元格
循环遍历矩阵
如果坐标存在于大西洋矩阵和太平洋矩阵中，则将其添加到返回数组中
返回结果

dfs --> 
1. base - return if out of bounds
2. base - return if our previous spot was larger because we are only marking spot as true
if it is larger than prev (prev) **this is tricky, we aren't checking if the water is
able to flow to this spot from a previous spot...instead we are checking if water can flow out FROM this spot
TO the "prev" spot, so really prev is kind of a confusing name, because it represents the next spot that water could flow to
2. base - if the spot is already marked as true we can just return, because it means that water from this spot can already reach ocean
3. if we've reached this point it means that our flow has not yet been interrupted from our starting point
so we CAN reach our ocean (pacific or atlantic) from the current spot, so we simply mark that in our ocean i.e. ocean[i][j] = true
4. call dfs recursively on all 4 surrounding spots

深度优先搜索 -->
1. 基本情况-如果越界则返回
2. 基本情况-如果我们先前的位置更大，则返回，因为我们只是将该位置标记为 true，
如果它比 prev（前一个）大，则表示我们没有检查水是否能够从先前的位置流向这个位置。
实际上，prev 是一个有些困惑的名称，因为它表示水可以流向的下一个位置
3. 基本情况-如果该点已经标记为 true，则可以直接返回，因为这意味着从该点可以到达海洋
4.如果已经到达此点，则表示我们的流还没有从起点中断，
因此我们可以从当前点到达太平洋或大西洋，因此我们只需在海洋中标记该点，即 ocean[i][j] = true
5. 对四个相邻的点递归调用 dfs
*/

var pacificAtlantic = function (matrix) {
  if (matrix.length === 0) return [];
  let numRows = matrix.length; // 横着数
  let numCols = matrix[0].length; // 竖着数

  let atlantic = []; // 可以流到大西洋的点
  let pacific = []; // 太平洋
  for (let i = 0; i < numRows; i++) {
    atlantic.push(new Array(numCols).fill(false));
    pacific.push(new Array(numCols).fill(false));
  }
  console.log("pacific:", pacific);
  console.log("atlantic:", atlantic);
  for (let col = 0; col < matrix[0].length; col++) {
    dfs(matrix, 0, col, 0, pacific);
    dfs(matrix, numRows - 1, col, 0, atlantic);
  }

  for (let row = 0; row < matrix.length; row++) {
    dfs(matrix, row, 0, 0, pacific);
    dfs(matrix, row, numCols - 1, 0, atlantic);
  }
  console.log("pacific:", pacific);
  console.log("atlantic:", atlantic);
  let res = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (atlantic[i][j] && pacific[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

// dfs 着色工具
const dfs = (matrix, i, j, prev, ocean) => {
  //checkOutOfBounds
  if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[i].length - 1)
    return;

  if (matrix[i][j] < prev) return;
  if (ocean[i][j]) return; //走到真,就没必要再往下走了
  ocean[i][j] = true; // 能走到,所以标记为 true

  dfs(matrix, i + 1, j, matrix[i][j], ocean);
  dfs(matrix, i - 1, j, matrix[i][j], ocean);
  dfs(matrix, i, j + 1, matrix[i][j], ocean);
  dfs(matrix, i, j - 1, matrix[i][j], ocean);
};

// test case
let heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
let out = pacificAtlantic(heights);
console.log(out);
