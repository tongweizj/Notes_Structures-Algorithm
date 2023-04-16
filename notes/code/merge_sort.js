// Merge sort 归并排序
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
}

function merge(leftArr, rightArr) {
  let temp = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      temp.push(leftArr.shift());
    } else {
      temp.push(rightArr.shift());
    }
  }
  return temp.concat(leftArr).concat(rightArr);
}
var s = [32, 12, 56, 78, 76, 45, 36];
var arr = mergeSort(s);
console.log(arr);
