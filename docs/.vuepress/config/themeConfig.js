const sidebarZh = require('./sidebar-zh.json');
const sidebarEn = require('./sidebar-en.json');
const navEn = require('./nav-en.json');

module.exports = {
  lastUpdated: 'Last Updated', // string | boolean,K
  nav: navEn,
  sidebar: {
    '/cn/':
    sidebarZh,
    '/en/':
    sidebarEn
  }
};