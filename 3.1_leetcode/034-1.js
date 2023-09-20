var searchRange = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;
  const find = (target, nums, low = 0, high = nums.length) => {
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (nums[mid] >= target) high = mid - 1;
      else low = mid + 1;
    }
    return low;
  };
  // find the start
  // while (low <= high) {
  //   mid = Math.floor((low + high) / 2);
  //   if (nums[mid] >= target) high = mid - 1;
  //   else low = mid + 1;
  // }
  let lLow = find(target, nums);
  // if target doesn't exist
  if (nums[lLow] !== target) return [-1, -1];

  const start = lLow;

  // reset low and high

  lLow = find(target + 1, nums);
  // find the end
  // while (low <= high) {
  //   mid = Math.floor((low + high) / 2);
  //   if (nums[mid] <= target) low = mid + 1;
  //   else high = mid - 1;
  // }
  return [start, lLow - 1];
};

let nums = [1, 2, 2, 2, 7, 14];

let target = 2;
let out = searchRange(nums, target);
// let out = find(target + 1, nums);
console.log(out);
