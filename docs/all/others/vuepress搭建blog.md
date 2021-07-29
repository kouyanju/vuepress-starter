## Vuepress——静态网站生成器

首先检查使node.js>=8.6，从头开始搭建。
按照官网命令行安装，整个项目就成了一个初始的静态网站。
文件的目录结构需要自己创建，虽然官网有推荐的目录结构，但那些都是自定义的。
开发时常常会出现代码与运行结果不同步的现象，多用运行和打包两个命令行就好啦。

vuepress的主要模块有配置、主题、插件等，
一个基本的网站我感觉其实只需要配置（导航栏、侧边栏，
这两个主要是路径结构对不对和markdown标题的问题）。
（他的默认主题我觉得挺简洁大方的）

难点：部署上线，
部署上线：https://gitlab.com/pages/vuepress

## 一、通过命令创建一个简单可用的 VuePress 文档

1. 创建并进入一个新目录
```sh
mkdir vuepress-starter && cd vuepress-starter
```
2. 使用包管理器进行初始化
```sh
yarn init 
npm init
```
3. 将 VuePress 安装为本地依赖
```sh
yarn add -D vuepress 
npm install -D vuepress
```
4. 创建第一篇文档(可以在网上查找到README.md页面中默认的内容copy上去做些修改即可)
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
5. 在 package.json 中添加一些 scripts
```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
6. 在本地启动服务器
```sh
yarn docs:dev
npm run docs:dev
```
VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。

现在，你应该已经有了一个简单可用的 VuePress 文档。

## 二、做一些基本配置

1. 接下来可以先了解一下官方约定好的目录结构
```js
.
├── docs
│   ├── .vuepress (可选的)用于存放全局的配置、组件、静态资源等
│   │   ├── components (可选的)该目录中的 Vue 组件将会被自动注册为全局组件
│   │   ├── theme (可选的)用于存放本地主题
│   │   │   └── Layout.vue
│   │   ├── public (可选的)静态资源目录。
│   │   ├── styles (可选的)用于存放样式相关的文件
│   │   │   ├── index.styl将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)存储 HTML 模板文件。
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)配置文件的入口文件
│   │   └── enhanceApp.js (可选的)客户端应用的增强
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```
2. 根据目录结构创建所需文件<br>
  (1). 首先我们需要在docs文档目录下创建一个 .vuepress 目录文件夹，
所有 VuePress 相关的文件都将会被放在这里。项目结构会变成这样：
```js
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
  (2). 其次，创建config.js<br/>
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，
它应该导出一个 JavaScript 对象：
```js
module.exports = {
  title:"Glowing'blog",
  description:"May everything you do for it have romantic results",
}
```
  (3). 对于上述的配置，如果运行起 npm run docs:dev，<br>
将会看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。即：README.md在页面中的展示

  (4). 在 .vuepress/public 设置公共文件<br/>
有时，需要提供一个静态资源，但是它们并不直接被我们的任何一个 markdown 文件或者主题组件引用 
—— 举例来说，favicons 和 PWA 的图标，在这种情形下，
我们可以将它们放在 .vuepress/public 中， 它们最终会被复制到生成的静态文件夹中。

3. markdown基本语法要了解<br/>
所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，展示在可见的页面中。
因此需要我们对markdown基本语法要熟知。帮助我们日后写文档。

## 三、安装一些插件
1. back-to-top 插件
(1)安装
```sh
yarn add -D @vuepress/plugin-back-to-top
# OR npm install -D @vuepress/plugin-back-to-top
```
(2)使用
```js
module.exports = {
  plugins: ['@vuepress/back-to-top']
}
```
2. pwa
(1)安装
```sh
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```
(2)使用
```js
module.exports = {
  plugins: {
      '@vuepress/pwa':{
         serviceWorker: true,
         updatePopup: {
           message: "发现新内容可用",
           buttonText: "刷新"
         }
  }
}
```
3. 




<vssue :options="{locale:'zh'}"/>