var singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length - 1;
  if (nums.length == 1) return nums[0];
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    console.log("mid:", mid, "left:", left, "right:", right);
    if (nums[mid + 1] == nums[mid]) {
      if (mid % 2 == 0) {
        left = mid;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] == nums[mid - 1]) {
      if (mid % 2 == 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      console.log("mid:", mid, "left:", left, "right:", right);
      return nums[mid];
    }
  }
};

let nums = [3, 3, 7, 7, 10, 11, 11];
let out = singleNonDuplicate(nums);
console.log(out);
