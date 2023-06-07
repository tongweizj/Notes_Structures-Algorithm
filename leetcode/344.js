// https://leetcode.com/problems/reverse-string/description/

// v2
// 很容易想到双指针的办法
var reverseString = function (s) {
  let r = s.length - 1;
  let l = 0;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
};
