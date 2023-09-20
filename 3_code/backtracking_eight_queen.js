let queenPlace = [];
let count = 0;
let printStr = "";

function printQueen() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (queenPlace[i] == j) {
        printStr += "Q ";
      } else {
        printStr += "* ";
      }
    }
    printStr += "\n";
  }
  console.log(printStr);
  console.log(`----count:${++count}----\n`);
  // queenPlace = [];
}

// 判断行列位置是否合适
function isOk(row, col) {
  let leftUp = col - 1; // 落点皇后的左上对角线
  let rightUp = col + 1; // 落点皇后的右上对角线

  for (let i = row - 1; i >= 0; i--) {
    if (queenPlace[i] == col) return false; // 同列上的格子有皇后
    if (leftUp >= 0) {
      if (queenPlace[i] == leftUp) return false; // 左上对角线有皇后
    }
    if (rightUp < 8) {
      if (queenPlace[i] == rightUp) return false; // 右上对角线有皇后
    }
    --leftUp;
    ++rightUp;
  }
  return true;
}

function eightQueen(row) {
  if (row == 8) {
    printQueen();
    return;
  }
  for (let col = 0; col < 8; col++) {
    // 同一行,如果有多个结果是当前情况符合要求,就会递归下一步
    // 但通过打印的方式,只显示最后都成功的
    if (isOk(row, col)) {
      queenPlace[row] = col;
      eightQueen(row + 1);
    }
  }
}

eightQueen(0);
// 最后的结果显示了,一共有 92 种走法
