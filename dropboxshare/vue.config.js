module.exports = {
	publicPath: process.env.production ? "https://assets.suconghou.cn/cloudrive/static/dist" : "/",
	productionSourceMap: false,
	configureWebpack: {
		externals: {
			vue: 'Vue',
		},
	},
	devServer: {
		disableHostCheck: true,
		proxy: {
			'/stream': {
				target: 'http://share.suconghou.cn',
				pathRewrite: { '^/stream': '/stream' },
				changeOrigin: true,
			},
		},
	},
};
