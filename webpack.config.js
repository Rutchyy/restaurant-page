const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
    },
    module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
};