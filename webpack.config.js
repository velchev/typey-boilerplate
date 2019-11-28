const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PORT = process.env.CLIENT_PORT || 9000;
const CWD = process.cwd();

module.exports = {
  entry: [
    require.resolve('raf/polyfill'),
    path.resolve(CWD, 'app', 'index.tsx')
  ],

  output: {
    publicPath: path.resolve(CWD, '/'),
    path: path.resolve(CWD, 'dist'),
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
        use: [{ loader: require.resolve('ts-loader') }]
      },
      {
        test: /\.ts(x?)$/,
        enforce: 'pre',
        loader: require.resolve('source-map-loader')
      },
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [require.resolve('@babel/preset-env'),
              {
                modules: false,
                useBuiltIns: 'usage',
              }],
            ],
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(CWD, 'app'),
    compress: true,
    port: PORT,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),

    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
      cwd: CWD,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(CWD, 'index.html'),
    }),
  ]
};
