// 引入JSON文件
const plugin = require('./config/plugins');
const themeConfig = require('./config/themeConfig');
module.exports = {
  plugins: plugin,
  themeConfig:themeConfig,
  markdown: {
    lineNumbers: true
  },
};