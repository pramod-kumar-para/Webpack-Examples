const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/ts/index.ts'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new HTMLWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}