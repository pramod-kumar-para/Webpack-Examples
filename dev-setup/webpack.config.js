const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map', // use sourcemaps to move your compiled code back to original source code
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};