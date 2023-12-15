var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, freqMap.get(num) + 1 || 1);
  }
  console.log(freqMap);

  // 用 freq 做为数组的 index
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  console.log(bucket);

  // 从 index 最大的开始取
  for (let i = bucket.length - 1; i > bucket.length - 1 - k; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    // if (result.length === k) break;
  }
  return result;
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let out = topKFrequent(nums, k);
console.log(out);

var topKFrequent_sort = function (nums, k) {
  let res = [],
    map = new Map();

  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));
  //
  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
};
