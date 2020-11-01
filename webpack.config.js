const fs = require("fs");
const path = require("path");
module.exports = {
	entry: {
		first: path.resolve(__dirname, "src/rectTutorial/index.ts"),
		mangdel: path.resolve(__dirname, "src/rectTutorial/MangDel/mangDel.ts"),
		ball: path.resolve(__dirname, "src/rectTutorial/Ball/ball.ts"),
		formuler: path.resolve(__dirname, "src/rectTutorial/Formuler/formuler.ts"),
		drawer: path.resolve(__dirname, "src/rectTutorial/Drawer/drawer.ts"),
		fabricTest: path.resolve(__dirname, "src/rectTutorial/Fabric/index.ts"),
	},
	resolve: {
		extensions: [".ts", ".js", ".json", ".css", ".scss"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.png$/,
				loader: "file-loader",
			},
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "public"),
	},
};
