var minSubArrayLen = function (target, nums) {
  let l = 0;
  let r = -1; // 必须是-1
  let sum = 0; // 在窗口滑动中，取r、j 很重要
  // 如果 r = 0 ，sum = nums[0]+nums[0] 这就是最短subarray了，但这是错误的
  let miniSubarray = nums.length + 1;

  while (l < nums.length) {
    // 控制滑动窗口
    // 在if 语句，边界的设定很重要，不能遗漏
    if (sum < target && r < nums.length - 1) {
      r++;
      sum = sum + nums[r];
    } else {
      sum = sum - nums[l];
      l++;
    }
    // 决定是否要记录成绩
    if (sum >= target && r - l + 1 < miniSubarray) {
      miniSubarray = r - l + 1;
    }
    console.log("l:", l, "r:", r, "sum:", sum);
  }
  // 异常情况
  if (miniSubarray == nums.length + 1) {
    return 0;
  }
  return miniSubarray;
};

let nums = [5, 3, 1, 2, 4, 3];
let target = 7;
console.log(minSubArrayLen(target, nums));
