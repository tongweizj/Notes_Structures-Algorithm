var intersection = function (nums1, nums2) {
  let all = new Set();
  let only = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!all.has(nums1[i])) {
      all.add(nums1[i]);
    }
  }
  console.log(all);
  for (let i = 0; i < nums2.length; i++) {
    if (all.has(nums2[i])) {
      only.add(nums2[i]);
    }
  }
  return only;
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

console.log(intersection(nums1, nums2));
