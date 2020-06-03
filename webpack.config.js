/* eslint-disable @typescript-eslint/no-var-requires */
const { EnvironmentPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const ISDEV = process.env.NODE_ENV !== 'production';
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
    path.resolve(CWD, 'src', 'index.tsx'),
  ],

  output: {
    publicPath: path.resolve(CWD, '/'),
    path: path.resolve(CWD, 'dist'),
    filename: ISDEV ? 'bundle.js' : 'bundle.[hash].js',
  },

  devtool: ISDEV ? 'cheap-source-map' : 'cheap-module-source-map',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '^': path.resolve(CWD, 'src'),
      '^images': path.resolve(CWD, 'static', 'images'),
    },
  },

  devServer: {
    contentBase: CWD,
    compress: true,
    port: PORT,
    historyApiFallback: true,
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
      {
        test: /\.css$/,
        use: ISDEV
          ? [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('postcss-loader'),
            ]
          : ExtractTextPlugin.extract([
              { loader: require.resolve('style-loader') },
              {
                loader: require.resolve('css-loader'),
                options: { minimize: true },
              },
              { loader: require.resolve('postcss-loader') },
            ]),
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: ISDEV
          ? [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('postcss-loader'),
              require.resolve('sass-loader'),
            ]
          : ExtractTextPlugin.extract({
              use: [
                require.resolve('css-loader'),
                require.resolve('postcss-loader'),
                {
                  loader: require.resolve('sass-loader'),
                  options: {
                    prependData: '$env: ' + process.env.NODE_ENV + ';',
                  },
                },
              ],
            }),
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: require.resolve('url-loader'),
          options: { limit: 100000 },
        },
      },
    ],
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
      favicon: path.join(__dirname, 'static', 'favicons', 'favicon.ico'),
    }),

    new ExtractTextPlugin({
      disable: ISDEV,
      filename: ISDEV ? 'bundle.css' : 'bundle.[hash].css',
      allChunks: true,
    }),
  ].concat(
    ISDEV
      ? []
      : [
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true,
          }),

          new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 8192,
            minRatio: 0,
          }),
        ],
  ),
};
