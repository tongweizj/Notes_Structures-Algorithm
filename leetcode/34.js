/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//   let l=0;
//   let r=nums.length-1;
//   let mid;

//   if(nums.length==0) return [-1,-1];
//   if(nums.length==1 && nums[0]==target) return [0,0]
//   while(l<=r){
//     mid = Math.floor(l+(r-l)/2);
//     if(target == nums[mid]){
//       if(target ==nums[mid-1]){
//         return [mid-1,mid];
//       }else if(target==nums[mid+1]){
//         return [mid,mid+1]
//       }else{
//           return [mid,mid]
//       }

//     }else if(target >nums[mid]){
//       l = mid+1;
//     }else{
//       r=mid-1;
//     }
//   }
//   return [-1,-1]
// };

var searchRange = function (N, T) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let Tleft = find(T, N);
  if (N[Tleft] !== T) return [-1, -1];
  return [Tleft, find(T + 1, N, Tleft) - 1];
};

const find = (target, arr, left = 0, right = arr.length) => {
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

let nums = [1, 2, 2, 2, 7, 14];

let target = 2;
// let out = searchRange(nums, target);
let out = find(target + 1, nums);
console.log(out);
