const webpack = require('webpack');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new uglifyJsPlugin({
			sourceMap: true
		})
	]
};

module.export = config;