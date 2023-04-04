// 46
// Given an array nums of distinct integers(不同的整数),
// return all the possible permutations(排列).
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (letters) {
  let result = [];
  dfs(letters, [], Array(letters.length).fill(false), result);
  // used = [false,false,false]
  console.log("permute res:", result);
  return result;
};
// 递归代码块固定框架
// def backtrack(路径, 选择列表):
function dfs(letters, path, used, result) {
  // console.log("dfs path:", path, "used", used, "res:", result);

  // // 退出递归的出口
  // if 满足结束条件:
  //     result.add(路径)
  //     return
  if (path.length == letters.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    // 做一个深拷贝，否则我们会一遍又一遍地附加相同的列表
    result.push(Array.from(path));
    return;
  }

  // 具体的行动
  // for 选择 in 选择列表:
  //     做选择
  //     backtrack(路径, 选择列表) // 递归运转的入口
  //     撤销选择
  for (let i = 0; i < letters.length; i++) {
    // skip used letters
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, result);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
}

let nums = [1, 2, 3];
let out = permute(nums);
console.log(out);

// 答疑
// 在这段代码中，result 是一个数组，被传递到了 dfs 函数中，并被用来存储每一种排列的结果。
// 因为 JavaScript 中的数组是对象，所以当将 result 作为参数传递给 dfs 函数时，实际上传递的是该数组对象的引用。
// 这意味着，dfs 函数中对 result 的任何修改都会直接反映在 permute 函数中，因为它们引用同一个数组。
// 所以，dfs 函数中对 result 的 push 操作会将结果添加到 permute 函数中定义的 result 数组中。
// 因此，在 permute 函数中可以直接使用 result 数组，因为它已经被 dfs 函数修改并填充了结果。
