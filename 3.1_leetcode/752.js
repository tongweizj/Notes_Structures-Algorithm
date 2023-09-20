/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const dead = new Set(deadends); // 死路
  const queue = [["0000", 0]]; // [当前锁的状态,转动次数]
  const seen = new Set(["0000"]); // 避免回头路,死循环

  for (let [curr, turns] of queue) {
    // queue 是动态变化
    if (curr === target) return turns;
    if (dead.has(curr)) continue; // 意思,不是正确答案,也不再往下转动
    for (let next of getNextStates(curr)) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push([next, turns + 1]);
    }
  }

  return -1;
};

function getNextStates(s = "0000") {
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }

  return ans;
}
