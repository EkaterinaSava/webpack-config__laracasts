'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

  entry: {
    public: [
       __dirname + '/src/main.js',
       __dirname + '/src/main.scss'
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  module: {

    rules: [

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]

  },

  plugins: [
    new ExtractTextPlugin('[name].css'),


  ]

};

if ( inProduction ) {

  module.exports.plugins.push(
    //__минификация JS для production
    new webpack.optimize.UglifyJsPlugin(),

    //__минификация CSS для production
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )

}
