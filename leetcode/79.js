/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const h = board.length;
  const w = board[0].length;
  var search = function (board, word, k, x, y) {
    if (word[k] !== board[x][y]) return false;
    if (k == word.length - 1) return true;

    board[x][y] = "*";
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (search(board, word, k + 1, i, j)) return true;
      }
    }

    board[x][y] = word[k];

    return false;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let out = search(board, word, 0, i, j);
      if (out == true) return true;
    }
  }

  return false;
};

let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";
let out = exist(board, word);
console.log(out);
