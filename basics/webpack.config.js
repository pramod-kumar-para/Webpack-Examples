const path = require('path');
const webpack = require('webpack');
// entry: indicates which module webpack should use to begin building its internal dependency graph,
//        webpack will figure out what other modules and libraries that entry point depends on.


// output: Output tells webpack where to emit the bundles it creates and how to name these files.

// loaders: Loaders enable webpack to process more than just the javascript files. For example css, scss, ts...
//          They do the following tasks
//          1. Identify which file or files should be transformed by a certain loader (with the test property).
//          2. Transform those files so that they can be added to your dependency graph (and eventually your bundle). (use property)
//          features: https://webpack.js.org/concepts/loaders/#loader-features

// plugins: Plugins are used to perform wider range of tasks. For example, bundle optimization and minification

module.exports = {
  entry: {
    index: './src/ts/index.ts',
    main: './src/ts/main.ts'
  }, // entry allows single and multiple entry points as well [entry: string|Array<string>]
  output: {
    filename: '[name]_bundle.js', // output bundle file name. 
    path: path.resolve(__dirname, 'dist') // bundle file is saved in the path here.
  },
  module: {
    rules: [{ 
            test: /\.ts$/, 
            use: 'ts-loader',
            exclude: /node_modules/ // To exclude multiple folder, seperate by | (node_modules | bower_components)
        },{
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ],
          exclude: /node_modules/
        }, {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader'
        }]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin()
  ]
};