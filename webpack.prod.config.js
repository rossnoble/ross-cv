var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$|\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },

  plugins: [
    new webpack.BannerPlugin('Built with love by Ross Noble.\ngithub.com/rossnoble\n\n'),
    // Define production environment flag to generate prod React build 
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
}
