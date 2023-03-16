function insertionSort(nums) {
  // nums.length = 1
  if (nums.length == 1) {
    return nums;
  }
  // nums.length >1
  let k, i;
  for (i = 1; i < nums.length; i++) {
    let temp = nums[i];

    for (k = i - 1; k >= 0 && nums[k] > temp; k--) {
      nums[k + 1] = nums[k];
      console.log("i=", i, nums);
    }
    nums[k + 1] = temp;
    console.log(nums);
  }
  return nums;
}

function InsertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
let nums = [7, 2, 1, 9, 3, 8];
console.log(insertionSort(nums));

// console.log(InsertionSort(nums));
