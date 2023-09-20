/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function (board, word) {
//   const dirs = [
//     [-1, 0],
//     [0, 1],
//     [1, 0],
//     [0, -1],
//   ];
//   const h = board.length;
//   const w = board[0].length;
//   var search = function (board, word, k, x, y) {
//     if (word[k] !== board[x][y]) return false;
//     if (k == word.length - 1) return true;

//     board[x][y] = "*";
//     for (const [dx, dy] of dirs) {
//       const i = x + dx;
//       const j = y + dy;
//       if (i >= 0 && i < h && j >= 0 && j < w) {
//         if (search(board, word, k + 1, i, j)) return true;
//       }
//     }

//     board[x][y] = word[k];

//     return false;
//   };
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       let out = search(board, word, 0, i, j);
//       if (out == true) return true;
//     }
//   }

//   return false;
// };
var exist = function (board, word) {
  if (board.length == 0) return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(board, word, i, j)) return true;
    }
  }
  return false;
};

var search = function (board, word, x, y) {
  if (word.length == 0) return true;
  if (
    x < 0 ||
    y < 0 ||
    x >= board.length ||
    y >= board[0].length ||
    word[0] !== board[x][y]
  )
    return false;

  let current = board[x][y];
  console.log(word);
  let temp = word.slice(1);
  board[x][y] = "*";
  let res =
    search(board, temp, x, y + 1) ||
    search(board, temp, x + 1, y) ||
    search(board, temp, x - 1, y) ||
    search(board, temp, x, y - 1);
  board[x][y] = current;

  return res;
};
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";
let out = exist(board, word);
console.log(out);
