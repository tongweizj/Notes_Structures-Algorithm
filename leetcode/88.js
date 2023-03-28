var merge = function (nums1, m, nums2, n) {
  let output = [];
  let p = m + n - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    output[p--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
    console.log(output);
  }
  while (m >= 0) {
    output[p--] = nums1[m--];
  }
  while (n >= 0) {
    output[p--] = nums2[n--];
  }
  return output;
};

let nums1 = [1, 2, 3, 0, 0, 0];

let m = 3;

let nums2 = [2, 5, 6];

let n = 3;
console.log(find(m, nums1));
// console.log(merge(nums1, m, nums2, n));
