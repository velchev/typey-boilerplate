const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  output: {
    publicPath: path.resolve(__dirname, '/'),
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 9000,
  },

  plugins: [

    new ForkTsCheckerWebpackPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

  ]

};
