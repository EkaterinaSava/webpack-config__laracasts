'use strict';

var webpack = require('webpack');

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

  entry: __dirname + '/src/main.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {

    rules: [

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]

  },

  plugins: [

  ]

};

if ( inProduction ) {

  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )

}
