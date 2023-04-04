/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let out = search(board, word, new Set(), 0, i, j);
      if (out == true) return true;
    }
  }

  return false;
};

var search = function (board, word, path, k, x, y) {
  console.log("path", path, "k", k, "x", x, "y", y);
  if (k == word.length - 1) return true;
  if (word[k] !== board[x][y]) return false;

  if (word[k] == board[x][y]) {
    path.add([x, y]);
    if (y < board[0].length - 1 && path.has([x, y + 1]) == false) {
      search(board, word, path, k + 1, x, y + 1);
    }
    if (x < board.length - 1 && !path.has([x + 1, y]) == false) {
      search(board, word, path, k + 1, x + 1, y);
    }
    if (x > 0 && !path.has([x - 1, y]) == false) {
      search(board, word, path, k + 1, x - 1, y);
    }
    if (y > 0 && !path.has([x, y - 1]) == false) {
      search(board, word, path, k + 1, x, y - 1);
    }
    path.delete([x, y]);
  }

  return false;
};
let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";
let out = exist(board, word);
console.log(out);
