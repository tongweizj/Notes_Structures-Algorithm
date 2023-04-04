/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  dfs(1, n, k, [], new Set(), res);
  return res;
};

function dfs(start, n, k, path, used, res) {
  console.log("used", used);
  if (path.length == k) {
    res.push(Array.from(path));
    return;
  }
  for (let i = start; i <= n; i++) {
    if (used.has(i)) continue;
    path.push(i);
    used.add(i);
    dfs(i + 1, n, k, path, used, res);
    path.pop();
    used.delete(i);
  }
}

let n = 4,
  k = 2;
let out = combine(n, k);
console.log(out);
