/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let sMap = {};
  let out = "";

  for (const element of s) {
    sMap[element] = sMap[element] == null ? 1 : sMap[element] + 1;
  }
  console.log(sMap);
  for (const element of dictionary) {
    let smap = { ...sMap };
    let j = 0;
    let isSuccess = true;
    while (j < element.length) {
      console.log("smap[element[j]] ", smap[element[j]], "j:", j);
      if (smap[element[j]] == undefined || smap[element[j]] < 1) {
        j = element.length;
        isSuccess = false;
      } else {
        smap[element[j]] = smap[element[j]] - 1;
        console.log("element:", element, "smap:", smap);
        j++;
      }
    }

    if (isSuccess == true && element.length > out.length) {
      out = element;
    } else if (isSuccess == true && element.length == out.length) {
      if (out > element) {
        out = element;
      }
    }
  }
  return out;
};

let s = "abpcplea";
let dictionary = [
  "ale",
  "apple",
  "monkey",
  "plea",
  "abpcplaaa",
  "abpcllllll",
  "abccclllpppeeaaaa",
];

let out = findLongestWord(s, dictionary);
console.log(out);
