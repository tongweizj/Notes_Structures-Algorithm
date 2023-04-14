// # 回文

// ## 1. 简化难度

// 原始的想法是安步就班的判断
// 1. 有没有错
// 2. 没错就都往中间走一步
// 3. 有错，就判断下单方走一步，行不行

// 因为只有一套指针，所以因为有一次犯错机会，变的负责了！
// 容易出错

// ## 高级思路

// 一次犯错的机会
// 那就把指针复制一套。
// 既然不好当下判断，让谁获得这条，
// 那就让l，和r 都获得一条命，去走一走。
// 只要有一个通了，就都成功了 ！

// 这就好像独生子女，只有一条命，遇到困难，犯错的时候，父母不知道该怎么办！
// 可是有两个孩子，那就让他们两各走一条路，只要有一个人走通了，就帮另一个人上岸。
// 这样对家庭来说，安全很多
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  let jump = 2;
  while (l <= r && jump > 0) {
    console.log("l:", l, s[l], "r:", r, s[r], "jump:", jump);
    if (s[l] != s[r]) {
      if (s[l + 1] == s[r] && s[l + 2] == s[r - 1]) {
        if (s[l]) jump--;
        l++;
        continue;
      }

      if (s[l] == s[r - 1] && s[l + 1] == s[r - 2]) {
        jump--;
        r--;
        continue;
      }
      return false;
    } else {
      l++;
      r--;
    }
  }
  return jump == 0 ? false : true;
};

let input =
  "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
let out = validPalindrome(input);
console.log(out);
