const path = require('path');
var myConfig1 = {
    entry: {
        'module1': './src/module1/index.ts'
    },
    module: {
        rules: [{
                test: /\.ts/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }]
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname+"../../../", 'dist')
    }
}

module.exports = myConfig1;