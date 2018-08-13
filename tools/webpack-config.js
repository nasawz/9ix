const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const tsImportPluginFactory = require('ts-import-plugin');
const pkgJson = require('../package.json');
const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (type) => {
  const isDev = type === 'dev';
  const isDist = type === 'dist';

  const cssLoaders = [
    {
      loader: require.resolve('css-loader'),
      options: { minimize: isDist }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        plugins: [require('autoprefixer'), require('postcss-discard-comments')]
      }
    }
  ];

  const lessLoaders = [
    {
      loader: require.resolve('less-loader'),
      options: {
        javascriptEnabled: true
      }
    }
  ];
  const miniCssLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../'
    }
  };
  return {
    mode: type === 'dev' ? 'development' : 'production',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.scss', '.less', '.css']
    },
    entry: _.compact([
      isDev && 'react-hot-loader/patch',
      isDev && `webpack-hot-middleware/client?http://127.0.0.1:${config.port}`,
      isDev && 'webpack/hot/only-dev-server',
      './src/index',
      './src/styles/index'
    ]),
    output: {
      publicPath: '',
      filename: `bundle/[name].js`,
      chunkFilename: `bundle/chunk.[name].js`,
      path: path.join(config.webpack.path.pub)
    },
    externals: {},
    optimization: {},
    plugins: _.compact([
      isDev && new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: pkgJson.title,
        template: './src/templates/index.ejs',
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: `bundle/[name].css`,
        chunkFilename: `bundle/chunk.[name].css`
      }),
      new WebpackNotifierPlugin({
        title: pkgJson.title
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ]),
    module: {
      rules: _.compact([
        {
          test: /\.(tsx?|jsx?)$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [
                tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'lib'
                })
              ]
            }),
            compilerOptions: {
              module: 'es2015'
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['url-loader?limit=1&name=img/[name].[ext]'],
          include: path.resolve(config.webpack.path.src)
        },
        {
          test: /\.(eot|ttf|woff)$/i,
          loaders: ['url-loader?name=font/[name].[ext]']
        },
        {
          test: /\.css$/,
          use: [miniCssLoader, ...cssLoaders]
        },
        {
          test: /\.less$/,
          use: [miniCssLoader, ...cssLoaders, ...lessLoaders]
        }
      ])
    }
  };
};
