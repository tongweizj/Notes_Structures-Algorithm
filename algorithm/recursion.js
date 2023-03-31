let tools = function (map, x, y, out) {
  if (x >= 10 || y >= 10 || x < 0 || y < 0) return;
  if (map[x][y] == 1) return;

  if (x > y) {
    out[x][y] = 1;
  }
  map[x][y] = 1;
  tools(map, x + 1, y, out);
  tools(map, x - 1, y, out);
  tools(map, x, y + 1, out);
  tools(map, x, y - 1, out);
};

let pacific = []; // 太平洋
let picture = [];
for (let i = 0; i < 10; i++) {
  pacific.push(new Array(10).fill(0));
  picture.push(new Array(10).fill(0));
}

tools(pacific, 0, 0, picture);
console.log("pacific:", pacific);
console.log("picture:", picture);
