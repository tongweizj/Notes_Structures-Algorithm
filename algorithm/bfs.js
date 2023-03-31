// 广度优先遍历（BFS）

// obj
let obj = {
  children: [
    {
      index: 0,
      children: [
        {
          index: 1,
          children: [
            {
              index: 3,
            },
          ],
        },
        {
          index: 9,
          children: [
            {
              index: 10,
            },
          ],
        },
      ],
    },
    {
      index: 4,
    },
    {
      index: 5,
      children: [
        {
          index: 7,
          children: [
            {
              index: 8,
            },
          ],
        },
      ],
    },
    {
      index: 6,
    },
  ],
};

let breadth = (node) => {
  let nodes = [];
  let stack = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      //取第一个
      let item = stack.shift();
      let children = item.children || [];
      nodes.push(item);
      for (const element of children) {
        stack.push(element);
      }
    }
  }
  return nodes;
};

let out = breadth(obj);

console.log(out);
