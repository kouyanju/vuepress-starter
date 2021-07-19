const { description } = require("commander");

// moment.locale('zh-cn');
module.exports = {
    title:'吃饭睡觉奋斗斗',
    description:'吃饭睡觉奋斗斗的笔记',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content: '吃饭睡觉奋斗斗' }],
      ['meta', { name: 'keywords', content: '吃饭睡觉奋斗斗的笔记介绍' }]
    ],
    plugins: {
       // 
      //   '@vuepress/last-updated',
      //   {
      //     transformer: (timestamp) => {
      //       return moment(timestamp).fromNow()
      //     }
      //   }
      // ],
      '@vssue/vuepress-plugin-vssue': {
        // set `platform` rather than `api`
        platform: 'github-v4',
  
        // all other options of Vssue are allowed
        owner: 'kouyanju',
        repo: 'vuepress-starter',
        clientId: '4aa8eeefc0ec4bc07b8d',
        clientSecret: 'a707849af241ad6faebb3be0831c8024738a6e72',
      },
      '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }

    },
     
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/hero.png',
      // navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        {
          text: 'Posts',
          items: [
            { text: 'Group1', items: [{ text: 'Home', link: '/' },
            { text: 'About', link: '/about' }] },
            { text: 'Group2', items: [{ text: 'Home', link: '/' },
            { text: 'About', link: '/about' }] }
          ]
        },
        { text: 'Recordlife', link: 'https://google.com' },
      ],
      sidebar: [
        '/',
        '/about',
        '/about1'
      ]
    }
  }