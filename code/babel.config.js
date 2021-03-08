const presets = [
	[
		"@babel/preset-env",
		{
			useBuiltIns: "usage",
			corejs: "3"
		}
	]
];
const plugins = [
	"@babel/plugin-transform-arrow-functions",
	"@babel/plugin-transform-function-name",
	"@babel/plugin-proposal-export-default-from",
	"@babel/plugin-proposal-do-expressions",
];

module.exports = {presets,plugins};