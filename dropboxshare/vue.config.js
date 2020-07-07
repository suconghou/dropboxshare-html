module.exports = {
	publicPath: process.env.production ? "https://assets.suconghou.cn/dropbox-share/static/dist" : "/",
	productionSourceMap: false,
	configureWebpack: {
		externals: {
			vue: 'Vue',
		},
	},
};
