/**
 * Created by delwar on 10/25/16.
 */
var webpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
  test: [/\.js$/, /\.es5$/],
  exclude: /node_modules/,
  loader: webpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;