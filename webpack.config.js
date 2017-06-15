'use strict';

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const inProduction = (process.env.NODE_ENV === 'production');

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
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]'
        }
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

    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'index.html')),
      //__минификация CSS для production
      minimize: inProduction
    })

  ]

};

if ( inProduction ) {

  module.exports.plugins.push(
    //__минификация JS для production
    new webpack.optimize.UglifyJsPlugin()

    //__минификация CSS для production
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  )

}
