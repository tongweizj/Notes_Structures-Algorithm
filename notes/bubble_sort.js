function sortArr(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [85, 14, 60, 1, 7, 100, 69, 56, 11, 33];
let out = sortArr(arr);
console.log(out);
