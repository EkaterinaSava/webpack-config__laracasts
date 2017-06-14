'use strict';

var webpack = require('webpack');

module.exports = {

  entry: __dirname + '/src/main.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {

    rules: [

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

  }

};
