var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/,      use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/,       use: ['style-loader', 'css-loader'] },
      { test: /\.(json)$/,    use: 'json-loader' },
      { test: /\.(png|jpg)$/, use: 'url-loader' }
    ]
  },
  devServer: {
    // host: '0.0.0.0',
    port: 8080,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'app/index.html'
    })
  ]
};