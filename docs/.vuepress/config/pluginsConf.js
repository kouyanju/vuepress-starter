// const moment = require('moment');
// moment.locale('zh-cn');

module.exports={
        
        //
        //  '@vuepress/last-updated': {
        //     transformer: (timestamp, lang) => {
        //     // 不要忘了安装 moment
        //     const moment = require('moment')
        //     moment.locale(lang)
        //     return moment(timestamp).fromNow()
        //  },
        '@vssue/vuepress-plugin-vssue': {
          // set `platform` rather than `api`
          platform: 'github-v4',
          // 其他的 Vssue 配置
          // all other options of Vssue are allowed
          owner: 'kouyanju',//github账户名
          repo: 'vuepress-blog',//github一个项目的名称
          clientId: '4aa8eeefc0ec4bc07b8d',//注册的Client ID
          clientSecret: 'Yc4a52d29518caccd084f42099a35a15b93a98205',//注册的Client Secret
          autoCreateIssue: true,// 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。

          
        },
       '@vuepress/pwa':{
         serviceWorker: true,
         updatePopup: {
           message: "发现新内容可用",
           buttonText: "刷新"
         }
       },
       '@vuepress/back-to-top':true,
       "vuepress-plugin-auto-sidebar": {}
 
}