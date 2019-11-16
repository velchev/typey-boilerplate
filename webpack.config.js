const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PORT = process.env.CLIENT_PORT || 9000;

module.exports = {
  entry: path.resolve(process.cwd(), 'app', 'index.tsx'),

  output: {
    publicPath: path.resolve(process.cwd(), '/'),
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },

  // TODO: if production set to none
  devtool: 'source-map',

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

  // TODO: Fix optimisation error Unexpected token: keyword «const»
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         warnings: false,
  //         parse: {},
  //         compress: {},
  //         mangle: true,
  //         output: null,
  //         toplevel: false,
  //         nameCache: null,
  //         ie8: false,
  //         keep_fnames: false,
  //       },
  //     }),
  //   ],
  // },

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
