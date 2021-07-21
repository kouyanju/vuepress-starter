// const moment = require('moment');
// moment.locale('zh-cn');

module.exports={
        
        //  '@vuepress/last-updated': {
        //    transformer: (timestamp) => {
        //      return moment(timestamp).fromNow()
        //    }
        //  },
        '@vssue/vuepress-plugin-vssue': {
          // set `platform` rather than `api`
          platform: 'github-v4',
    
          // all other options of Vssue are allowed
          owner: 'kouyanju',
          repo: 'vuepress-starter',
          clientId: '4aa8eeefc0ec4bc07b8d',
          clientSecret: 'Yc4a52d29518caccd084f42099a35a15b93a98205',
          autoCreateIssue: true,
          
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