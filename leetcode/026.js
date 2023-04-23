// 26.Remove Duplicates from Sorted Array
// ## 解题
// Given an integer array nums **sorted in non-decreasing order**, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// Custom Judge:

var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("---", i, k);
    if (nums[i] != nums[k]) {
      nums[++k] = nums[i];
      console.log(nums);
    }
  }
  return ++k;
};

nums = [1, 2];
out = removeDuplicates(nums);
console.log(out);

// for (let i = 0; i < 0; i++) {
//   console.log(i);
// }

// 1. 原始数据
//    1. 已经排序的数据
//    2. 数据有重复

// 2. 要把重复的数据去掉
// 3. 把不重复的数据，放到数组的前面
