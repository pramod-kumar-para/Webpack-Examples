const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/' // specify the public path from where your resources must be loaded
    },
    module: {
        rules: [{
                test: /\.css$/, // css
                use: [
                    'style-loader',
                    'css-loader'
                ]
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
                test: /\.(csv|tsv)$/ //csv data
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