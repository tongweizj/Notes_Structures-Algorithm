/**

 * @param {number[]} nums

 * @param {number} target

 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // nums ：list ->map
  var nums_map = {};
  for (let i in nums) {
    nums_map[nums[i]] = i;
  }
  console.log(nums_map);

  // 遍历： nums，查找到岸
  for (let key in nums) {
    let y = target - nums[key];
    console.log(y);

    if (nums_map.hasOwnProperty(y) && key != nums_map[y]) {
      console.log(nums_map[y]);
      return [key, nums_map[y]];
    }
  }

  // return
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  // nums ：list ->map
  var map = {};

  // 遍历： nums，查找到岸
  for (let key in nums) {
    let y = target - nums[key];
    if (nums_map.hasOwnProperty(y) && key != nums_map[y]) {
      return [key, nums_map[y]];
    } else {
      nums_map[nums[key]] = key;
    }
  }

  // return
};

var twoSum3 = function (nums, target) {
  let hash = {};
  for (let i in nums) {
    //这里慢了 4ms
    let n = nums[i]; // 这里比之前快了 4ms
    let y = target - n;
    if (hash.hasOwnProperty(y) && i != hash[y]) {
      return [i, hash[y]];
    }
    hash[n] = i;
  }
};

// 68ms

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum4 = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]; // 从数组里取值，比从内存里面直接取值慢
    let y = target - n;
    if (hash.hasOwnProperty(y) && i != hash[y]) {
      return [i, hash[y]];
    }
    hash[n] = i; // 用的时候再开始填入 hash，找到答案后就不在填入。省时间
  }
};

// 高分答案
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum5 = function (nums, target) {
  // nums ：list ->map
  var nums_map = {};

  // 遍历： nums，查找到岸
  for (let key in nums) {
    if (nums_map.has(target - nums[key]) && key != nums_map[y]) {
      return [key, nums_map[target - nums[key]]];
    } else {
      nums_map[nums[key]] = key;
    }
  }

  // return
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum6 = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
