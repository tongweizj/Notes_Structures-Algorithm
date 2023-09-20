// 深度优先遍历 （DFS）

// 递归写法
let depth1 = (node, nodeList = []) => {
  //node不能为null
  if (node == null) return [];

  // 遍历
  nodeList.push(node);
  let children = node.children || [];
  //如果children.length存在
  for (const element of children) {
    //递归调用
    depth1(element, nodeList);
  }

  return nodeList;
};

// 栈实现
let depth2 = (node) => {
  let stack = [];
  let nodes = [];

  //node不能为null
  if (node == null) return [];

  // 遍历
  stack.push(node);
  while (stack.length) {
    console.log(stack);
    //每次取最后一个
    let item = stack.pop();
    let children = item.children || [];
    nodes.push(item);
    //判断children的长度
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
  return nodes;
};

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

// 测试
// let stack = [];
// stack.push(obj);
// console.log(stack);
// console.log(stack.length);

// 运行 dfs
let out = depth1(obj);
console.log(out);
// 递归
// [
//   { children: [ [Object], [Object], [Object], [Object] ] },
//   { index: 0, children: [ [Object] ] },
//   { index: 1, children: [ [Object] ] },
//   { index: 3 },
//   { index: 4 },
//   { index: 5, children: [ [Object] ] },
//   { index: 7, children: [ [Object] ] },
//   { index: 8 },
//   { index: 6 }
// ]

// stack
// [
//   { children: [ [Object], [Object], [Object], [Object] ] },
//   { index: 0, children: [ [Object] ] },
//   { index: 1, children: [ [Object] ] },
//   { index: 3 },
//   { index: 4 },
//   { index: 5, children: [ [Object] ] },
//   { index: 7, children: [ [Object] ] },
//   { index: 8 },
//   { index: 6 }
// ]
