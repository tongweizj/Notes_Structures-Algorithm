var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^A-Za-z0-9]/g, "");
  console.log(s);
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    console.log("l:", l, "r:", r);
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

let s = "ab_a"; // "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// amanaplanacanalpanama;
