var webpack = require('webpack');

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
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin('Built with love by Ross Noble.\ngithub.com/rossnoble\n\n')
  ],

  devServer: {
    contentBase: "./public",
    compress: true,
    historyApiFallback: true,
    inline: true
  }
}
