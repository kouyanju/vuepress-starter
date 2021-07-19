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
    // plugins: [
    //   [
    //     '@vuepress/last-updated',
    //     {
    //       transformer: (timestamp) => {
    //         return moment(timestamp).fromNow()
    //       }
    //     }
    //   ]
    // ],
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