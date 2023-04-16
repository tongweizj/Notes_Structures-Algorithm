function insertionSort(arr) {
  if (arr.length == 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
      j--;
    }
  }
  return arr;
}

let arr = [85, 14, 60, 1, 7, 100, 69, 56, 11, 33];
let out = insertionSort(arr);
console.log(out);
