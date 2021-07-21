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
            }
          ]
        },
        {
          text:'Javascript',
          items:[
            {
              text: '数据类型', link: '/javascript/j-aaa',
            },
            {
              text: '数组', link: '/javascript/j-bbb',
            },
            {
              text: '事件', link: '/javascript/j-ccc',
            }
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
          text:"算法",link:'/vue/algorithm'
        }
      ]
    },
    {
      text : 'Essays',
      items: [
        { text : "2021/7/21记录",link: '/essays/20210721记录'}
      ]
    },
  ]