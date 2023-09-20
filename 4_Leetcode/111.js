/**  题目
 * 111. Minimum Depth of Binary Tree
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function (root) {
  // 异常
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  // BFS start
  let depth = 1;
  let queue = [root]; // 将整个TreeNode对象，作为第一个元素，填入 q
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let node = queue.shift();
      // 判断是否叶子节点
      // 如果 y，返回结果，这个叶子节点是最短路径
      if (!node.left && !node.right) return depth;
      // 拆 Tree，填入 q
      else {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    depth++;
  }

  return depth; // 这里返回的叶子，是没有最短的情况，给出最长
};

/**
 * 注意
 * 这个 while 循环和 for 循环的配合，
 * while 循环控制⼀层⼀层往下⾛，
 * for 循环利⽤ sz 变量控制从左到右遍历每⼀层⼆叉树节点：
 */
