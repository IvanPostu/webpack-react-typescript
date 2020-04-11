/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const PATH_TO_BUILD_FOLDER = path.resolve(__dirname, 'build');

module.exports = (env, opt) => {
  if (isDev === false && isProd === false) {
    throw new Error('NODE_ENV is not defined');
  }

  const useLocalNetwork = opt.localNetwork === 'true';

  return {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),

    entry: {
      // polyfill: '@babel/polyfill',
      app: './main/index.ts',
    },

    output: {
      filename: isProd ? '[name]_[contenthash].js' : '[name]_[hash].dev.js',
      path: PATH_TO_BUILD_FOLDER,
      publicPath: '/',
      chunkFilename: isProd ? '[name]_[contenthash].bundle.js' : '[name]_[hash]_bundle.dev.js',
    },

    devtool: false,

    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './main/index.html',
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src', 'main', 'favicon.ico'),
          to: PATH_TO_BUILD_FOLDER,
        },
      ]),
      new MiniCssExtractPlugin({
        filename: 'static/css/[hash].css',
      }),
      ...(isDev
        ? [
            new SourceMapDevToolPlugin({
              filename: '[file].map',
              exclude: ['vendor', 'polyfill'],
              columns: false,
              module: true,
            }),
          ]
        : []),
    ],

    devServer: isDev
      ? {
          contentBase: path.join(__dirname, 'build'),
          useLocalIp: useLocalNetwork,
          host: '127.0.0.1',
          port: 8000,
          hot: true,
          historyApiFallback: true,
        }
      : {},

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: isProd ? [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()] : [],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components|vendor)/,
          use: [
            {
              loader: 'babel-loader',
            },
            'eslint-loader',
          ],
        },
        {
          test: /\.ts$/,
          exclude: /(node_modules|bower_components|vendor)/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components|vendor)/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /(node_modules|bower_components|vendor)/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  };
};
