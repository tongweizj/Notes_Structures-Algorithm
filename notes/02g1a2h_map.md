# Map

## 用途

### 信息登记

例如，给你一个字符串，你需要弄清楚其中用了多少个字母，每个字母出现过几次。

易懂
```js
let s = 'werqwetfgadfgasd'
let map={}
for(let i=0;i<s.length ;i++){
  if(map[s[i]]==null) {
    map[s[i]]=1}
  else{
    map[[s[i]]]+=1
  }

}
```

简洁

```js
  let s = 'werqwetfgadfgasd'
  let map={}
  s.split("").forEach((element) => {
    if (map[element] == null) map[element] = 1;
    else map[element] = map[element] + 1;
  });
```