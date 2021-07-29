## display属性

#### ①inline：display的默认属性。将元素显示为内联元素，元素前后没有换行符。
#### ②none：元素不会显示，而且改元素现实的空间也不会保留。
注：
  - display:none、visibility:hidden和opacity:0的区别：
  - display:none是彻底消失，不在文档流中占位，浏览器也不会解析该元素，而且会引起重排和重绘；
  - visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，在文档流中占位，浏览器会解析该元素，会引起重绘，会被子元素继承，可以通过visibility:visible使子元素显示出来，元素上的事件绑定也无法触发，transition对于visibility:hidden的元素是无效的；
  - opacity:0 是视觉上消失了，在文档流中占位，浏览器会解析该元素，会引起重绘，会被子元素继承，而且不能通过设置子元素的opacity:1使子元素显示出来，元素上的事件绑定可以触发，transition对于opacity:0的元素是有效的。
#### ③block：将元素将显示为块级元素，元素前后会带有换行符。元素独占一行。
#### ④inline-block：行内块元素。这个属性值融合了inline 和 block 的特性，即是它既是内联元素，又可以设置width和height。
#### ⑤inherit：规定应该从父元素继承 display 属性的值。
#### ⑥table：此元素会作为块级表格来显示(类似table)，表格前后带有换行符。
<vssue :options="{locale:'zh'}"/>