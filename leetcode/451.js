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
  console.log(map);
  // 排序
  map.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });
  map.forEach(function (value, key, map) {
    console.log("1", key, value);
    sort[value] = key;
  });
  console.log(sort);

  // 重组
  let length = sort.length;
  let out = "";
  for (let i = length - 1; i > 0; i--) {
    for (let j = i; j < 0; j--) {
      out.push(sort[j]);
    }
  }
  return out;
};

let s = "tree";
let out = frequencySort(s);
console.log(out);
