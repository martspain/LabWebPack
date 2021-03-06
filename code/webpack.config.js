const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js",
		pageOne: "./src/oneIndex.js",	
		pageTwo: "./src/twoIndex.js",	
		pageThree: "./src/threeIndex.js",	
		pageFour: "./src/fourIndex.js",	
		pageFive: "./src/fiveIndex.js",	
		pageSix: "./src/sixIndex.js",	
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			chunks: ["main"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageOne.html",
			template: "./src/HTML/pageOne.html",
			chunks: ["pageOne"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageTwo.html",
			template: "./src/HTML/pageTwo.html",
			chunks: ["pageTwo"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageThree.html",
			template: "./src/HTML/pageThree.html",
			chunks: ["pageThree"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageFour.html",
			template: "./src/HTML/pageFour.html",
			chunks: ["pageFour"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageFive.html",
			template: "./src/HTML/pageFive.html",
			chunks: ["pageFive"]
		}),	
		new HtmlWebpackPlugin(
		{
			filename: "pageSix.html",
			template: "./src/HTML/pageSix.html",
			chunks: ["pageSix"]
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules:[
			/*
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},*/
			
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
			/*
			{
				test: /\.html$/i,
				loader: 'file-loader',
				options: {
					name: "[name].[ext]"
				},
				exclude: path.resolve(__dirname, "./index.html")
			},*/
			{
				test: /\.mp4$/,
				use: "file-loader?name=videos/[name].[ext]",
			},/*
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /(node-modules)/,
			},*/
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		]
	}
};