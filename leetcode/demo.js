// // const removeDuplicates = (nums) => {
// //   let k = 0;

// //   for (let i=0; i < nums.length; i += 1) {
// //     if (nums[i] !== nums[i + 2]) {
// //       nums[k] = nums[i];
// //       k += 1;
// //     }
// //     console.log(nums);
// //   }

// //   return k;
// // };

// // nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// // out = removeDuplicates(nums);
// // console.log(out);

// function selectSort(nums, length) {
//   for (let i = 0; i < length; i++) {
//     // 下层循环是冒泡，找出最小值
//     for (let j = i + 1; j < length; j++) {
//       console.log("start i:", i, "j:", j, nums);
//       if (nums[i] > nums[j]) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//       console.log("end i:", i, "j:", j, nums);
//     }
//   }
//   return nums;
// }

// // let nums = [20, 40, 30, 10, 60, 50];
// // console.log(selectSort(nums));

// // function selectSort(nums, length) {
// //   for (let i = 0; i < length; i++) {
// //     let min = i;
// //     for (let j = i + 1; j < length; j++) {
// //       if (nums[min] > nums[j]) {
// //         min = j;
// //       }
// //     }
// //     let temp = nums[i];
// //     nums[i] = nums[min];
// //     nums[min] = temp;
// //   }
// //   return nums;
// // }
// // let nums = [20, 40, 30, 10, 60, 50];
// // console.log(selectSort(nums));

// // function randArray(len, min, max) {
// //   return Array.from(
// //     { length: len },
// //     (v) => Math.floor(Math.random() * (max - min)) + min
// //   );
// // }
// // // let nums = [20, 40, 30, 10, 60, 50];
// // // let nums = randArray(100000000, 1, 200000000);
// // // let nums = randArray(10, 1, 200);

// let nums = [68, 148, 87, 158, 96, 98, 9, 124, 119, 147];
// console.log(selectSort(nums, nums.length));

// // let nums = randArray(10000, 1, 2000000);
// // let ts1 = new Date().valueOf();
// // selectSort(nums, nums.length);
// // let ts2 = new Date().valueOf();
// // console.log(ts2 - ts1);

// // function insertionSort(arr) {
// //   const length = arr.length;
// //   for (let i = 1; i < length; i++) {
// //     let temp = arr[i];
// //     let j = i - 1;
// //     while (j >= 0&&arr[j]<temp) {

// //         arr[j + 1] = arr[j];
// //         arr[j] = temp;
// //       }
// //       console.log("i:", i, "j:", j, arr);
// //       j--;
// //     }
// //   }
// //   return arr;
// // }
// // let nums = [20, 40, 30, 10, 60, 50];
// // console.log(insertionSort(nums));

let  dict = {}
dict