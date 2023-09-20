// function selectionSort(arr) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < length; j++) {
//       minIndex = arr[minIndex] <= arr[j] ? minIndex : j;
//     }
//     if (minIndex !== i) {
//       const temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    // 找出最小值
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 确定最小值
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

let arr = [85, 14, 60, 1, 7, 100, 69, 56, 11, 33];
let out = selectionSort(arr);
console.log(out);
