var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    console.log("mid:", mid);
    if (nums[left] <= nums[mid] && nums[mid] <= nums[right]) {
      console.log("1", left, right);
      return nums[left];
    }

    if (nums[mid] < nums[left] && nums[mid] <= nums[right]) {
      if (nums[left] <= [right]) right = mid - 1;
      else left = mid + 1;
      console.log("2", left, right);
    } else if (nums[mid] >= nums[left] && nums[mid] > nums[right]) {
      if (nums[left] <= [right]) right = mid - 1;
      else left = mid + 1;

      console.log("3", left, right);
    }
  }
  console.log("right:", right);
  return nums[right];
};
let nums = [3, 1, 1];
let out = findMin(nums);

console.log(out);
