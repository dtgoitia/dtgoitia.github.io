var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/i,   loader: 'babel-loader',                 include: path.resolve(__dirname,'app'), exclude: /node_modules/ },
      { test: /\.css$/i,  loader: ['style-loader', 'css-loader'], include: path.resolve(__dirname,'app'), exclude: /node_modules/  },
      { test: /\.json$/i, loader: 'json-loader',                  include: path.resolve(__dirname,'app'), exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: { limit: 30000, name: '[name].[ext]' }
        }]
      }
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