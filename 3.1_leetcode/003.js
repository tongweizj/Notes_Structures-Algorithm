let lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = -1;
  let maxSubstring = new Set();
  let max = 0;
  while (l < s.length) {
    console.log(
      "start: l:",
      l,
      "r:",
      r,
      "maxSubstring:",
      maxSubstring,
      "max:",
      max
    );

    if (!maxSubstring.has(s[r + 1]) && r + 1 < s.length) {
      r++;
      maxSubstring.add(s[r]);
    } else {
      maxSubstring.delete(s[l]);

      l++;
    }
    if (r - l + 1 > max) {
      max = r - l + 1;
    }
    console.log(
      "end: l:",
      l,
      "r:",
      r,
      "maxSubstring:",
      maxSubstring,
      "max:",
      max
    );
  }
  return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
