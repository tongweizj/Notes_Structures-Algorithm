## 内存泄漏
官方解释：内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。
通俗点就是指由于疏忽或者错误造成程序未能释放已经不再使用的内存，不再用到的内存却没有及时释放，从而造成内存上的浪费。
避免内存泄漏
在局部作用域中，等函数执行完毕，变量就没有存在的必要了，垃圾回收机制很快地做出判断并且回收，但是对于全局变量，很难判断什么时候不用这些变量，无法正常回收；所以，尽量少使用全局变量。在使用闭包的时候，就会造成严重的内存泄漏，因为闭包中的局部变量，会一直保存在内存中。
常见的js内存泄漏
意外的全局变量
在js中，一个未声明变量的使用，会在全局对象中创建一个新的变量；在浏览器环境下，全局对象就是window
js复制代码function foo(){
  a="test"
}
//上面的写法等同于
function foo(){
  window.a ="test"
}

js复制代码function foo(){
  this.a="test"
  // 函数自身发生调用，this指向全局对象window
}
foo()

上面的a变量应该是foo()内部作用域变量的引用，由于没有使用var来声明这个变量，这时变量a就被创建成了全局变量，这个就是错误的，会导致内存泄漏。
解决方式： 在js文件开头添加 ‘use strict'，开启严格模式。（或者一般将使用过后的全局变量设置为 null 或者将它重新赋值，这个会涉及的缓存的问题，需要注意）
js复制代码<script>
"use strict"
console.log("这是严格模式。")
</script>
<script>
console.log("这是正常模式。")
</script>

计时器和回调函数timers
定时器setInterval或者setTimeout在不需要使用的时候，没有被clear，导致定时器的回调函数及其内部依赖的变量都不能被回收，这就会造成内存泄漏。
解决方式：当不需要interval或者timeout的时候，调用clearInterval或者clearTimeout
DOM泄漏
1.给DOM对象添加的属性是一个对象的引用
js复制代码var a = {}
document.getElementById('id').diyProp = a

解决方法：在window.onload时间中加上 document.getElementById('id').diyProp = null;
2.元素引用没有清理
js复制代码var a = document.getElementById('id');
document.body.removeChild(a);
// 不能回收，因为存在变量a对它的引用。虽然我们用removeChild移除了但是还在对象里保存着#的引用，即DOM元素还在内存里面。

解决方法： a = null
3.事件的绑定没有移除
解决方法： 移除时间的监听
js闭包
闭包在IE6下会造成内存泄漏，但是现在已经无须考虑了。值得注意的是闭包本身不会造成内存泄漏，但闭包过多很容易导致内存泄漏。闭包会造成对象引用的生命周期脱离当前函数的上下文，如果闭包如果使用不当，可以导致环形引用（circular reference），类似于死锁，只能避免，无法发生之后解决，即使有垃圾回收也还是会内存泄露。
console
控制台日志记录对总体内存内置文件的影响，也是个重大的问题，同时也是容易被忽略的。记录错误的对象，可以将大量的数据保留在内存中。传递给console.log的对象是不能被垃圾回收，所以没有去掉console.log可能会存在内存泄漏

作者：来世做春风
链接：https://juejin.cn/post/7062184102933315621
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。