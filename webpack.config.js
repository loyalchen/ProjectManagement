module.exports = {
	entry: {
		signUp:"./dev/redux/signUp/index.js",
	},
	output: {
		path: __dirname + "/public/js/",
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_comonents)/,
			loader: "babel",
			query: {
				presets: ["es2015", "react"]
			}
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_comonents)/,
			loader: "babel",
			query: {
				presets: ["es2015", "react"]
			}
		}]
	},
	resolve: {
		alias: {
			'ie': 'component-ie'
		}
	}
}