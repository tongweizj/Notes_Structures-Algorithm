let x = 2;
console.log(x ** 31);
console.log(x % 10);
console.log(Math.floor(x / 10));

// 自己做出来了
// 思路和较优解也是类似
// 但JS 显然没有他们用的好

// 我的解法
var reverse = function (x) {
  // 将 x 转成数组，index：位，value：值

  let z = 1;
  if (x < 0) {
    z = -1;
    x = x * z;
  }
  let temp = [];
  while (x > 0) {
    temp.push(x % 10);
    x = Math.floor(x / 10);
  }
  console.log(temp);
  l = temp.length;
  for (let i = 0; i < l; i++) {
    x += temp[i] * 10 ** (l - i - 1);
  }
  x = x * z;
  let check = 2 ** 31;
  if (x > check || x < check * -1) {
    return 0;
  }
  return x;
};

let y = reverse(-123);
console.log(y);
2147483648;
1534236469;

// 较优解
var reverse = function (x) {
  // 将 x 转成数组，index：位，value：值
  const absReversed = Math.abs(x).toString().split("").reverse().join("");
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};
