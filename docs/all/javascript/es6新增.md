## es6新增
### ① 增加块作用域 
### ② 增加 let const
### ③ 解构赋值 ：
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
### ④ 引入Class作为对象的模板，实现更好的面向对象编程
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。class 的本质是 function。它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。包括类的创建、类的继承、setter和getter
### ⑤ 增加箭头函数 
### ⑥引入promise、await/async解决异步回调问题
### ⑦模板字符串——`   `
### ⑧字符串新增一些方法：
- includes()——查看字符串中是否包含某些字符
- startsWith()——查看字符串是否以某个字符串开头
- endsWith()——查看字符串是否以某个字符串结尾
- repeat()——字符串重复
- padEnd(长度,补充内容)——如果字符串长度不满xxx位，在其后面补字符
- padStart(长度,补充内容)——如果字符串长度不满xxx位，在其前面补字符
### ⑨函数：
- (1)默认参数：function(a,b=100){  }
- (2)可变数量参数：function(a,...args){    }
### ⑩数组新增方法：
- (1)扩展运算符：...[]——将数组转为用逗号分隔的参数序列
- (2)Array.from()——将类似数组的对象和可遍历的对象转为真正的数组
- (3)Array.of()——将一组值转为数组
- (4)copyWithin()方法——在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
- (5)find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
- (6)findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
- (7)fill()——使用给定值填充一个数组
- (8)新增遍历数组方法：entries()、keys()、values()。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
- (9) Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值。该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度，则会重置为从0开始。

## let const var
 
### ① var的变量提升：
通过var声明的，包含变量和函数在内的所有声明都会在任何代码被执行前首先被处理。只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量。
### ② 暂时性死区：
只要块级作用域内存在let/const命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let/const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”。
“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。所以，在没有let/const之前，typeof运算符是百分之百安全的，永远不会报错。
## 函数声明的方式
### ①函数定义语句：
function 函数名( ){ }
### ②函数直接量表达式：
var 变量名 = function ( ) { }或者var 变量名 = function 函数名( ) { }
<br>可以有函数名称也可以没有，没有就是匿名函数

### ③构造函数：var 变量名 = new Function( ){ }
### ④立即执行函数：(function ( ) { })( )
### ⑤箭头函数function 函数名(( )=>{ })
## 变量提升和函数提升
通常JS引擎会在正式执行之前先进行一次预编译，在这个过程中，首先将变量声明及函数声明提升至当前作用域的顶端，然后进行接下来的处理。
函数的优先权是最高的，它永远被提升至作用域最顶部，然后才是函数表达式和变量按顺序执行。
作用域和作用域链
### ① 作用域：
Javascript中的作用域说的是变量的可访问性和可见性。也就是说整个程序中哪些部分可以访问这个变量，或者说这个变量都在哪些地方可见。
js中有三种作用域：全局作用域、函数(局部)作用域、块级作用域。
- (1)全局作用域：任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问。
- (2)函数作用域：也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问。
- (3)块级作用域：在大括号中使用let和const声明的变量存在于块级作用域中。在大括号之外不能访问这些变量。但是在块级作用域中用var声明的变量可以在大括号之外使用。使用var声明的变量不存在块级作用域中。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
- (4)作用域可以嵌套，例如：块级作用域嵌套在函数作用域内，函数作用域又嵌套在全局作用域中。
### ② 作用域链：
当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域。如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错。

## 箭头函数与普通函数
### 1.普通函数： 
- ① this总是指向它的直接调用者
- ② 在默认情况(非严格模式下,未使用 'use strict'),没找到直接调用者,则 this 指的是window ③ 在严格模式下,没有直接调用者的函数中的this是undefined 
- ④ 使用call,apply,bind(ES5 新增)绑定的,this指的是绑定的对象
### 2.箭头函数：
- ① 箭头函数是匿名函数，不能作为构造函数，不能使用new。
- ② 箭头函数的this永远指向其上下文的this，任何方法都改变不了其指向，也就是this指向是固定的，如 call() , bind() , apply()；普通函数的this指向调用它的那个对象。
this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。这种特性有利于封装回调函数。
- ③ 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- ④ 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
- ⑤ 不可以使用super
- ⑥ 不可以使用new.target


## promise
### ① 什么是Promise？
- (1) Promise是一个构造函数，用来生成promise实例
- (2) 构造函数接收一个参数，这个参数是一个函数，当创建实例的时候，参数的函数会立即执行
- (3) 参数里面的函数又接收两个参数，两个参数均为函数，一个为resolve，一个为reject
- (4) 异步操作成功时调用resolve，resolve函数将promise对象的状态从pending变为resolved并将结果作为参数传出去
- (5) 异步操作失败时调用reject，reject函数将promise对象的状态从pending变为rejected，并将操作报出的错误作为结果传递出去
- (6) 实例生成后，可以用then方法分别指定resolved状态和rejected状态的回调函数
- (7) then方法接收两个函数作为参数，分别为resolved和rejected的回调函数，第二个参数可选
- (8) catch方法在then方法后调用，发生错误时调用，本质上等同于then(null, rejected)，如果有多个catch的话，也只会执行第一个catch。如果catch里面还有错误，可以由后面的catch来捕获。
### ② 特点：
- (1) 三种状态：pending、resolved（fulfilled）、rejected
- (2) 对象的状态不受外部影响，只有异步操作的结果才能决定当前是哪一种状态
- (3) 一旦状态改变就凝固了，不会再改变（pending→resolved；pending→rejected）
### ③ 优点：
- (1) 解决回调地狱（Callback Hell）问题
- (2) 代码更扁平，可读性更高
- (3) 更好地进行错误捕获
### ④ 缺点：
- (1) 无法取消 Promise,一旦新建它就会立即执行，无法中途取消。 
- (2) 如果不设置回调函数，promise 内部抛出的错误，不会反应到外部。 
- (3) 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
```js
var promise = new Promise(function(){  
            wx.request({                           
                url:'xxxxx',
                method:'get',
                success:function(res){          
                    resolve(res);
                }
                fail:function(err){
                    reject(err);
                }
            })
})
promise.then(function(value){
      console.log('请求数据成功')
},function(err){
      cnsole.log('请求数据失败')
})
```
### 实现promise：
```js
const PENDING = Symbol();
const FULLFILLED = Symbol();
const REJECTED = Symbol();
const MyPromise = function(fn){
    this.state = PENDING;
    this.value = '';

    const reslove = (value)=>{
        this.state = FULLFILLED;
        this.value = value;
    }
    const rejected = (error)=>{
        this.state = REJECTED;
        this.value = error;
    }

    this.then = (onFullfill,onReject)=>{
        if(this.state==FULLFILLED){
            onFullfill(this.value);
        }else {
            onReject(this.value);
        }
    }

    try {
        fh(resplve,reject);
    } catch (error) {
        reject(error);
    }
}
//test
let p = new MyPromise((reslove,reject)=>{
    reslove('hello');
})
p.then(res=>{
    console.log(red);   //hello
})
```
## Promise有哪些API
### 1.Promise.all
`const p = Promise.all([p1, p2, p3]);`
Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例。Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
<br>p的状态由p1、p2、p3决定，分成两种情况：

- (1)只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
```js
var p1 = Promise.resolve(1);
var p2 = Promise.resolve(2);
var p3 = Promise.resolve(3);
        Promise.all([p1, p2, p3]).then(function(results){
            console.log(results);
        });
        //结果：array(3)
        //        0:1
        //        1:2
        //       2:3
```
- (2)只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
并发执行只要有一个出错将会触发catch，不会触发then：
```js
var p1 = Promise.resolve(1);
var p2 = Promise.reject(2); //失败的原因，catch将会捕获这个值
var p3 = Promise.resolve(3);
        Promise.all([p1, p2, p3]).then(function(results){
            console.log(results);
        }).catch(function(e){
            console.log(JSON.stringify(e));
        });
```
- (3)实现promise.all()
```js
function isPromise(obj) {
  return !!obj && (typeof obj === 'function' || typeof obj === 'object') && typeof obj.then == 'function';
}

function myPromiseAll(arr) {
  let res = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i].then(data => {
          res[i] = data;
          if (res.length === arr.length) {
            resolve(res)
          }
        }).catch(error => {
          reject(error)
        })
      } else {
        res[i] = arr[i];
      }
    }
  })
}
```
### 2.Promise.race()
`const p = Promise.race([p1, p2, p3]);`
Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
<br>实现promise.race：

```js
function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      return arr[i].then(resolve, reject)
    }
  })
}
```
### 3.Promise.allSettled()
Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
<br>该方法返回的新的 Promise 实例，一旦结束，状态总是fulfilled，不会变成rejected。状态变成fulfilled后，Promise 的监听函数接收到的参数是一个数组，每个成员对应一个传入Promise.allSettled()的 Promise 实例。

### 4.Promise.any()
该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

## async和awit
- async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
- async 函数返回的是一个 Promise 对象。
- await是个运算符，用于组成表达式，await 表达式的运算结果取决于它等的东西。如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。
- async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。
<vssue :options="{locale:'zh'}"/>