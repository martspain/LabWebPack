const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js",
		//pageOne: "./src/oneIndex.js",	
		//pageTwo: "./src/twoIndex.js",	
		//pageThree: "./src/threeIndex.js",	
		//pageFour: "./src/fourIndex.js",	
		//pageFive: "./src/fiveIndex.js",	
		//pageSix: "./src/sixIndex.js",	
	},
	output: {
		filename: "main.bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins:[
		new HtmlWebpackPlugin(
		{
			template: "./src/template.html",
		}),	/*
		new HtmlWebpackPlugin(
		{
			filename: "pageOne.html",
			template: "./src/template.html",
			chinks: ["pageOne"]
		}),	*/
	],
	module: {
		rules:[
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
				  outputPath: 'images',
				},
			},
			{
				test: /\.html$/i,
				loader: 'file-loader',
				options: {
					name: "[name].[ext]"
				},
				exclude: path.resolve(__dirname, "./index.html")
			},
			{
				test: /\.mp4$/,
				use: "file-loader?name=videos/[name].[ext]",
			},
		]
	}
};