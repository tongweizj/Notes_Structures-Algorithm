## 特性

- 无序 unordered
- 唯一性 unique elements
- 搜索非常快, 时间复杂度 O(1)
## Tip

### Array to Set

```js
let deadends = ["0201","0101","0102","1212","2002"]
const dead = new Set(deadends);
// Set(5) { '0201', '0101', '0102', '1212', '2002' }
```