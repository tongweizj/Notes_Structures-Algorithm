// let s = "werqwetfgadfgasd";
// let map = {};
// for (let i = 0; i < s.length; i++) {
//   if (map[s[i]] == null) {
//     map[s[i]] = 1;
//   } else {
//     map[[s[i]]] += 1;
//   }
// }
let s = "werqwetfgadfgasd";
let map = {};
s.split("").forEach((element) => {
  if (map[element] == null) map[element] = 1;
  else map[element] = map[element] + 1;
});
console.log(map);
