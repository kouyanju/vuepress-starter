## vue路由两种实现
路由就是根据不同的 url 地址展示不同的内容或页面。路由出现在单页面应用中，页面中公共部分不变，只改变部分内容的使用。路由切换时根据不同的路由动态加载不同的组件。
### ① Hash：
- 就是指 url 尾巴后的 # 号以及后面的字符，它的特点在于：hash 虽然出现URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。
- 原理：hash通过BOM的location.hash切换路由，通过window.onhashchange()监听路径切换。
### ② History： 利用了HTML5 History Interface中新增的pushState()和replaceState()方法，这两个方法应用于浏览器的历史记录栈，在当前已有的back、forward、go的基础上，他们提供了对当前浏览器进行修改的功能，只是当它们被修改时，虽然浏览器的URL发生了变化，但是不会立即向后端服务器发送请求，但是如果点击刷新，就会重新向后端服务器发送请求。
- 不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问http://oursite.com/user/id就会返回 404，这就不好看了。
所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个index.html页面，这个页面就是你 app 依赖的页面。
- 原理： 利用H5的 history中新增的两个API pushState()(切换路由) 和 replaceState() 和一个事件onpopstate监听路径切换。
### ③ 区别：
hash 能兼容到IE8， history 只能兼容到 IE10；
- (1) 调用history.pushState()相比于直接修改hash，存在以下优势：
    1. pushState()设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，因此只能设置与当前URL同文档的URL；
    2. pushState()设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
    3. pushState()通过stateObject参数可以添加任意类型的数据到记录中；而hash只可添加短字符串；
    4. pushState()可额外设置title属性供后续使用。
- (2) 缺点：但是在用户手动输入URL后回车，或者刷新（重启）浏览器的时候。
    1. hash 模式下，仅hash符号之前的内容会被包含在请求中，如http://www.abc.com,因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回404错误。
    2. history模式下，前端的URL必须和实际向后端发起请求的URL一致。如htttp://www.abc.com/book/id。如果后端缺少对/book/id 的路由处理，将返回404错误

## 简单路由实现——单页面切换：
```js
const routeTable = {
  "1": div1,
  "2": div2,
  "3": div3,
  "4": div4 
};
function route(container) {
  let number = window.location.hash.substr(1);
  number = number || 1;    //默认路由，当hash值为空时将它设为1
 //根据hash得到路由表中相应页面
  let div = routeTable[number.toString()];
  //如果路由表中不存在则跳转到404页面
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";

  //先将容器中清空
  container.innerHTML = "";
  //展示内容
  container.appendChild(div);
}
router(app)
window.addEventListener("hashchange", () => {
    route(app);
  });
```
