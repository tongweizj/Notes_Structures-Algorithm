var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  let jump = 2;
  while (l <= r && jump > 0) {
    console.log("l:", l, s[l], "r:", r, s[r],'jump:',jump);
    if (s[l] != s[r]) {
      if (s[l + 1] == s[r] && s[l+2] == s[r - 1]) {
        if (s[l]) jump--;
        l++;
        continue;
      } 
      
      if(s[l ] == s[r-1]&&s[l+1 ] == s[r-2]) {
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


