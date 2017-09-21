var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', path.resolve(__dirname, 'entry.js')],
	},
	output: {
		path: path.resolve(__dirname, 'built'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/built/'
	},
	devServer: {
		contentBase: path.resolve(__dirname),
		publicPath: 'http://localhost:8080/built/'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
			{ test: /\.css$/, loader: 'css-loader' },
			{ test: /\.less$/, loader: 'css-loader'}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
}
