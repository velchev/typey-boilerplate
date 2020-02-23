/* eslint-disable @typescript-eslint/no-var-requires */
const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const PORT = process.env.CLIENT_PORT || 9000;
const CWD = process.cwd();

const BABEL_BASE_PRESETS = [
  [
    require.resolve('@babel/preset-env'),
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: { version: 3 },
    },
  ],
  require.resolve('@babel/preset-react'),
];

const BABEL_BASE_PLUGINS = [
  require.resolve('@babel/plugin-proposal-class-properties'),
  require.resolve('@babel/plugin-proposal-object-rest-spread'),
];

const BABEL_TYPESCRIPT_PRESETS = BABEL_BASE_PRESETS.concat(
  require.resolve('@babel/preset-typescript'),
);

const BABEL_TYPESCRIPT_PLUGINS = BABEL_BASE_PLUGINS.concat(
  require.resolve('babel-plugin-const-enum'),
);

module.exports = {
  entry: [
    require.resolve('raf/polyfill'),
    path.resolve(CWD, 'app', 'index.tsx'),
  ],

  output: {
    publicPath: path.resolve(CWD, '/'),
    path: path.resolve(CWD, 'dist'),
    filename: 'bundle.js',
  },

  // TODO: if production set to none
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '^': path.resolve(CWD, 'app'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              presets: BABEL_BASE_PRESETS,
              plugins: BABEL_BASE_PLUGINS,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              presets: BABEL_TYPESCRIPT_PRESETS,
              plugins: BABEL_TYPESCRIPT_PLUGINS,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: CWD,
    compress: true,
    port: PORT,
    historyApiFallback: true,
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
          // eslint-disable-next-line @typescript-eslint/camelcase
          keep_fnames: false,
        },
      }),
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),

    new EnvironmentPlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    }),

    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: CWD,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(CWD, 'index.html'),
    }),
  ],
};
