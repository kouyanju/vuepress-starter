const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf");
const { description } = require("commander");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/siderbarConf")


// moment.locale('zh-cn');
module.exports = {
    title:'吃饭睡觉奋斗斗',
    description:'吃饭睡觉奋斗斗的笔记',
    head:headConf,

    plugins:pluginsConf,
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/hero.png',
      // navbar: false,
      nav: navConf,
      sidebar: []



    }
  }