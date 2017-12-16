const path = require('path');
var myConfig2 = {
    entry: {
        'module2':'./src/module2/index.ts'
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

module.exports = myConfig2;