
## HTML5+css3新增
## HTML5新增
① 新增语义化标签：
- `<header></header>`
- `<main></main>`
- `<footer></footer>`
- `<hgroup></hgroup>`
- `<nav></nav>`
- `<artical></artical>`
- `<aside></aside>`
- `<section></section>`
- `<figure></figure>`




## css3其他
#### ①border-image：
- 值：url（）
- 宽度
- 延伸方式：
  1. repeat（一个个平铺直到铺满）
  2. round（自适应平铺个数）
  3. sretch（默认：拉伸）
注：一定要先设置一个border，这样border-image才生效
#### ②mask：url no-repeat x y/size；遮罩
- url : 遮罩的图片（有图片的区域会透视，而没有图片的区域不会透视）
- x : 遮罩的x位置，可以写数值或者是单词（center）.
- y : 遮罩的y位置，同上
- repeat : 平铺方式
- size : 遮罩层的大小
- 注：目前还没有实现标准写法，所以需要添加浏览器前缀来看到效果（-webkit-mask）；
不仅可以遮罩背景图，也可以遮罩图片。
#### ③box-reflect ：倒影
- above : 上/below : 下/left : 左/right : 右
- 距离
- 遮罩/渐变（渐变针对的不是颜色变化，主要是透明度的变化）
- 注：目前还没有实现标准写法，所以需要添加浏览器前缀来看到效果（-webkit-box-reflect）； 
不会影响到正常的文档流。
- 另一种实现倒影的方式：利用 transform的scale为负值 (-1)
#### ④blur：模糊 —— filter : blur(...px)；
#### ⑤outline：轮廓 
- 可以在边框的外面在添加一层轮廓，轮廓不占文档流。
- 去outline默认边框 —— summary{outline：none；}
<vssue :options="{locale:'zh'}"/>