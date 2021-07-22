const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf");
const { description } = require("commander");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/siderbarConf")


// moment.locale('zh-cn');
module.exports = {
    title:"Glowing'blog",
    description:"May everything you do for it have romantic results",
    head:headConf,

    plugins:pluginsConf,
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/hero.png',//添加导航栏logo
      // navbar: false,//禁用导航栏
      nav: navConf,
      sidebar: [],
      sidebarDepth:1,





    }
  }