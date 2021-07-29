## 盒子模型
#### 盒模型有两种：
IE 盒子模型(怪异盒模型)、W3C 盒子模型
#### 区别： 
IE盒子模型的 width和height包含了content、border 和 padding三个部分；<br/>
W3C标准盒子模型的width和height就是指content的。
#### 盒模型可以通过css的属性box-sizing设置：
content-box——默认值，也就是W3C盒模型；<br/>
border-box——IE盒模型
#### 由内到外的组成顺序：
content内容、padding内边距/内填充、border边框、margin外边距，其中padding、border和margin都包括上下左右（top、bottom、left、right）四个方向。
## 弹性盒模型flex

- 弹性盒的兼容性不是很好，但是很适合在移动端使用
- 弹性盒的使用可以省去我们很大的代码量看起来更加简洁
- 当然如果不考虑低版本的 IE，你可以放心大胆的用
#### 针对父容器的属性：
`flex-direction：row(默认值)/row-reverse/colum/colum-reverse；`——主轴排列方向<br/>
`display：flex；`——使盒子变为弹性盒模型，默认为主轴方向为水平排列<br/>
`justify-content：flex-start(默认值)/center/flex-end/space-between/space-around；`——主轴排列方式<br/>
`align-items：strech(默认值)/flex-start/center/flex-end/baseline；`——侧轴对齐方式<br/>
`flex-wrap：nowrap(默认值)/wrap/wrap-reverse；`——是否换行<br/>
`align-content：strech(默认值)/flex-start/flex-end/center/space-between/spce-around；`——行之间的对齐方式<br/>
#### 针对子元素的属性：
`order：0/1/2/...；`——排序，值越大，排的越靠后<br/>
`align-self：auto/strech/flex-start/center/flex-end；`——自身对齐方式(以所在一行的高度为标准)<br/>
`flex：1/2/3；`——按比例自适应容器<br/>
`flex-grow：0/1；`——定义项目的放大比例，默认为0<br/>
`flex-shrink：0/1；`——定义项目的缩小比例，默认为1<br/>
注：弹性和模型中如果子元素不设置宽度，宽度由内容决定。

## flex属性！
#### flex:1; === flex: 1 1 任意数字+任意长度单位;
  - 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
  - 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
  - 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小

<br/>
可以看出最重要的一点在 第三个参数 flex-basis 上, 我们再来回顾以下 这个属性的作用
flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小
auto 为表示项目本身的大小, 如果设置为 auto, 那么这三个盒子就会按照自己内容的多少来等比例的放大和缩小, 所以出现了上图中三个盒子不一样大的情况
那我们如果随便设置一个其他带有长度单位的数字呢, 那么他就不会按项目本身来计算, 所以它不关心内容, 只是把空间等比收缩和放大
<vssue :options="{locale:'zh'}"/>