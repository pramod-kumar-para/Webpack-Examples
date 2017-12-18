const path = require('path');

// creates an index.html file and updates with bundle scripts
const HtmlWebpackPlugin = require('html-webpack-plugin');

// dist will be cleaned
const CleanWebpackPlugin = require('clean-webpack-plugin');

// asset manifest plugin
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};