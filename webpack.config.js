var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
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
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin('Built with love by Ross Noble.\ngithub.com/rossnoble\n\n'),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: "./public",
    compress: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  }
}
