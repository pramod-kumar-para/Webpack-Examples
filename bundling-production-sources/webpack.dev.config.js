const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

// use webpack merge to merge webpack configurations

// Dont use sourcemaps in production

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});