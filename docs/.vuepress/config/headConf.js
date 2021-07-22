module.exports = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],//增加一个自定义的favicon
  ['link', { rel: 'manifest', href: '/manifest.json' }], //PWA 插件需要引入的manifest
  ['meta', { name: 'author', content: 'Glowing' }],//<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
  ['meta', { name: 'keywords', content: "Glowing'blog" }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
  // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
  // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
  // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
]