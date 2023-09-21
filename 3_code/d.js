// 示例三： 更加全面的字典操作和使用
function add(key, value){   // 添加字典的键值(key:value)
  this.dataStore[key] = value;
}

// 显示字典中的键值(key:value)
function show(){            
  for(var key in this.dataStore){
    console.log(key + " : " + this.dataStore[key]);
  }
}

// 根据键(key)查找对应的值(value),返回值value
function find(key){         
    return this.dataStore[key];
}

// 根据键(key)删除对应的值(value)
function remove(key){       
      delete this.dataStore[key];
  }

// 计算字典中的元素个数
function count(){          
    var n = 0;
    for(var key in Object.keys(this.dataStore)){
        ++n;
    }
    return n;
}

// 字典按值(value)排序,并输出排序后的结果
function kSort(){           
    var dic = this.dataStore;
    var res = Object.keys(dic).sort();
    for(var key in res ){
        console.log(res[key] + " : " + dic[res[key]]);
    }
}

// 字典按值(value)排序,并输出排序后的结果
function vSort(){           
  var dic = this.dataStore;
  var res = Object.keys(dic).sort(function(a,b){ 
      return dic[a]-dic[b]; 
  });
  for(var key in res ){
      console.log(res[key] + " : " + dic[res[key]]);
  }
}

// 清空字典内容
function clear(){           
  for(var key in this.dataStore){
    delete this.dataStore[key];
  }
}

function Dictionary(){              
  this.dataStore = new Array(); // 定义一个数组，保存字典元素
  this.add = add;               // 添加字典内容(key:value)
  this.show = show;             // 显示字典中的键值
  this.find = find;             // 根据键(key)查找并返回对应的值(value)
  this.remove = remove;         // 删掉相对应的键值
  this.count = count;           // 计算字典中的元素的个数
  this.kSort = kSort;           // 按键(key)排序
  this.vSort = vSort;           // 按值(value)排序
  this.clear = clear;           // 清空字典内容
}

var dic = new Dictionary();       // 构造字典类

dic.add('one', '1');              // 添加字典的元素( key:value)
dic.add('three', '3');
dic.add('two', '2');
dic.add('8', 'seven');
dic.add('five', '5');
dic.add('four', '4');
dic.add('9', 'nine');
dic.add('six', '6');
dic.add('7', 'eight');

console.log("========"); 
dic.show();  // 显示字典中的键值对

console.log("========"); 
console.log("one: " + dic.find("one"));  // 通过键(key)查找对应的值(value)
console.log("7: " + dic.find("7")); 

console.log("========");
dic.remove("9");          // 删除字典中的键值对
console.log(dic.count()); // 统计字典中的元素的个数 

console.log("========");
dic.kSort();  // 按key排序

console.log("========");
dic.vSort();  // 按value排序

console.log("========");
dic.clear();  // 清空所有字典的元素
