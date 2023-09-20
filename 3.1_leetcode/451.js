/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  let sort = [];
  // 统计
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  // 排序
  sort = [...map].sort((a, b) => b[1] - a[1]);

  // 重组
  let out = "";
  for (let char of sort) out += char[0].repeat(char[1]);
  return out;
};

let s = "tree";
let out = frequencySort(s);
console.log(out);
