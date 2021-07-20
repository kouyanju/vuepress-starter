## 盒子模型
#### 盒模型有两种：
IE 盒子模型(怪异盒模型)、W3C 盒子模型
#### 区别： 
IE盒子模型的 width和height包含了content、border 和 padding三个部分；
W3C标准盒子模型的width和height就是指content的。
#### 盒模型可以通过css的属性box-sizing设置：
content-box——默认值，也就是W3C盒模型；
border-box——IE盒模型
#### 由内到外的组成顺序：
content内容、padding内边距/内填充、border边框、margin外边距，其中padding、border和margin都包括上下左右（top、bottom、left、right）四个方向。

