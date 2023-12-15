/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 这道题，错误点 1
// 新载的花不能和之前载的花相邻
// 新载的花之间，能不能相邻
// 新载的花，要不要连续载一起
// var canPlaceFlowers = function (flowerbed, n) {
//   let space = 0;
//   let max = 0;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if ((i == 0 || i == flowerbed.length - 1) && flowerbed[i] == 0) {
//       space += 2;
//     } else if (flowerbed[i] == 0) {
//       space += 1;
//     } else if (flowerbed[i] == 1 && flowerbed[i - 1] == 0) {
//       space = 0;
//     }
//     if (space > max) {
//       max = space;
//     }
//   }
//   console.log(max);
//   return max >= n + 2 ? true : false;
// };

var canPlaceFlowers = function (flowerbed, n) {
  let added = 0;
  let j = 0;
  while (j < flowerbed.length && added < n) {
    if (flowerbed[j] !== 1) {
      if (
        (flowerbed[j - 1] === 0 || j === 0) &&
        (flowerbed[j + 1] === 0 || j === flowerbed.length - 1)
      ) {
        flowerbed[j] = 1;
        added++;
      }
    }
    j++;
  }
  return added === n;
};
let input = [1, 0, 0, 0, 0, 1];
let n = 2;
console.log(canPlaceFlowers(input, n));
