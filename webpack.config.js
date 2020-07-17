const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }, 
    devServer: {
        overlay: true
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-loader/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};