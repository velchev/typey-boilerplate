const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PORT = process.env.CLIENT_PORT || 9000;

module.exports = {
  entry: path.resolve(process.cwd(), 'app', 'index.tsx'),

  output: {
    publicPath: path.resolve(__dirname, '/'),
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },

  mode: 'production',

  devtool: "source-map",

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(process.cwd(), 'app'),
    compress: true,
    port: PORT,
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
