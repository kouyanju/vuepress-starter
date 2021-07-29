## this指向

### ① 情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window
:::tip 提示
这里需要说明的是在js的严格版中this指向的不是window，而是undefined。
:::
### ② 情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
### ③ 情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象。
### ④ 特殊情况：this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的
### ⑤ 构造函数版this：首先new关键字会创建一个空的对象，然后会自动调用一个函数方法，将this指向这个空对象，这样的话函数内部的this就会被这个空的对象替代。
### ⑥ 箭头函数：箭头函数本身没有this和arguments，默认指向定义它时，所处上下文的函数对象的this指向。即ES6箭头函数里this的指向就是上下文里函数对象this指向，偶尔没有上下文对象，this就指向window。
例如：
```js
const obj = {
  radius: 10,  
  perimeter: () => 2 * Math.PI * this.radius
}
console.log(obj.perimeter())    // NaN
```
perimeter是箭头函数，this应该指向上下文函数this的指向，这里上下文没有函数对象，就默认为window，而window里面没有radius这个属性，就返回为NaN。
### ⑦ this遇到return：如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。注意：虽然null也是对象，但是在这里this还是指向那个函数的实例。
```js
new：
function myNew (fun,...args){
    let obj = {};
    obj.__proto__ = fun.prototype;
    let res = fun.apply(obj,args);
    return res instanceof Object ? res:obj;
}
//test
function Animal(name){
    this.name = name;
}
let animal = myNew(Animal,'dog');
console.log(animal.name)  //dog
```
## call、apply、bind
### ① 区别：
- (1) bind是一个方法，而且要在后边加上()传参执行，bind 会返回执行上下文被改变的函数，而不会立即执行。参数可以执行的时候再次添加，但要注意的是形参的顺序，call和apply是立即执行，bind的参数和call相同；
- (2) call之后的参数将依次传递给借用的方法作为参数，即 fn.call(thisobj,arg1,arg2)，可以有 N 个参数；
- (3) apply第一个参数是对象，第二个参数是数组，fn.apply(thisobj,arg)，此处 arg 是一个伪数组，只有两个参数。
:::tip 提示
注：如果call和apply的第一个参数写的是null，那么this指向的是window对象。
:::

### ② 共同点：
- (1) 都是要改变 this 指向 ；
- (2) 第一个参数是 this 要指向的对象 ；
- (3) 都可以利用后续的参数 。
### ③手写bind、apply、call
(1)bind()
```js
Function.prototype.MyBind = function(context,...args) {
    let self = this;
    return function(){
        return self.apply(context,args);
    }
}
//test
let a = {name:'jack'};
let test = function(){
    console.log(this.name) //jack
}
let  rs = test.MyBind(a);
rs();
```
(2)apply
```js
Function.prototype.MyApply = function (context,args) {
    context.fn = this;
    let res;
    if(!args){
        res = context.fn();
    }else {
        res = context.fn(...args)
    }
    return res;
}
//test
let a = {name:'jack'};
function test(arg1,arg2,arg3){
    console.log(this.name);  //jack
    console.log(arg1,arg2,arg3);
}
test.MyApply(a,[1,2,3])
```
(3)call
```js
Function.prototype.myCall = function(context,...res){
    context.fn = this;
    var result = context.fn(...res);
    delete context.fn;
    return result;
}
//test
let a = {name:'jack'};
function test(arg1,arg2,arg3){
    console.log(this.name);  //jack
    console.log(arg1,arg2,arg3);
}
test.myCall(a,[1,2,3])
```
<vssue :options="{locale:'zh'}"/>