const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/' // specify the public path from where your resources must be loaded
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [{
                test: /\.css$/, // css
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{
                test: /\.(png|svg|jpg|gif)$/, // images
                use:[
                    'file-loader'
                ]
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/, // fonts
                use: [
                    'file-loader'
                ]
            },{
                test: /\.(csv|tsv)$/, //csv data
                use: [
                    'csv-loader'
                ]
            },{
                test: /\.xml$/, // xml data
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}