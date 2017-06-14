'use strict';

var webpack = require('webpack');

module.exports = {

  entry: __dirname + '/src/main.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }

};