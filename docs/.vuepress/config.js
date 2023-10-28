// 引入JSON文件
const plugin = require('./config/plugins');
const themeConfig = require('./config/themeConfig');
const head = require('./config/head');
module.exports = {
	title: 'vs code ide docs',
	description: 'Visual Studio Code IDE document',
	head:head,
	plugins: plugin,
	themeConfig: themeConfig,
	markdown: {
		lineNumbers: true
	},
};