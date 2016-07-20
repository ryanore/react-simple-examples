var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.(scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader?sourceMap'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
