function sortarr(myArr) {
  const length = arr.length;
  for (let i = 0; i < myArr.length - 1; i++) {
    for (let j = 0; j < length - i; j++) {
      if (myArr[j] > myArr[j + 1]) {
        let temp = myArr[j];
        myArr[j] = arr[j + 1];
        myArr[j + 1] = temp;
      }
    }
  }
  return myArr;
}

let arr = [85, 14, 60, 1, 7, 100, 69, 56, 11, 33];
let arr1 = sortarr(arr);
console.log(arr1);
