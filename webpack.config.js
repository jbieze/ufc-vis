const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./faceoff.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  node: {
    fs: 'empty'
  }
};
