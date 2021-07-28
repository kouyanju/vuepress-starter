module.exports=[
    { text: 'Home', link: '/' },
    { text: 'About', link:'/about'},
    {
      text: '前端基础',
      items: [
        {
          text :'css',
          items:[
            {
              text: '盒子模型', link: '/css/c-aaa',
            },
            {
              text: 'position属性', link: '/css/c-bbb',
            },
            {
              text: '清除浮动', link: '/css/c-ccc',
            },
            {
              text: '块级元素、行内元素、BFC', link: '/css/块级元素和行内元素',
            },
            {
              text: '布局', link: '/css/布局',
            },
            {
              text: 'css选择器', link: '/css/css选择器',
            },
            {
              text: 'display属性', link: '/css/display属性',
            },
            {
              text: 'css动画', link: '/css/动画',
            },
            {
              text: 'h5+css3新增', link: '/css/h5+css3新增',
            },
          ]
        },
        {
          text:'Javascript',
          items:[
            {
              text: '数据类型', link: '/javascript/数据类型',
            },
            {
              text: '字符串、数组', link: '/javascript/数组',
            },
            {
              text: '防抖、节流', link: '/javascript/防抖节流',
            },
            {
              text: '事件', link: '/javascript/事件',
            },
          ]
        },
        {
          text:"Vue",
          items:[
            {
              text:"对vue的理解",link:'/vue/basicUnderstanding'
            }
          ]
        },

      ]
    },
    
    {
      text : 'Others',
      items: [
        {
          text : "git",link:'/others/git',
        },
        {
          text:"算法",link:'/others/algorithm',
        },
        {
          text : "vuepress搭建blog",link:'/others/vuepress搭建blog',
        },
      ]
    },
    {
      text : 'Essays',
      items: [
        { text : "2021/7/21记录",link: '/essays/20210721记录'}
      ]
    },
  ]

  