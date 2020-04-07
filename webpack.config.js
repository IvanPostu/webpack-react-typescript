const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const PATH_TO_BUILD_FOLDER = path.resolve(__dirname, 'build')

module.exports = (env, opt) => {

  if (isDev === false && isProd === false) {
    throw new Error('NODE_ENV is not defined')
  }

  return {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', './main/index.js']
    },
    output: {
      filename: isProd ? '[name].[contenthash].js' : '[name].[hash].js',
      path: PATH_TO_BUILD_FOLDER
    },
    resolve: {
      extensions: ['.js', '.ts'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './main/index.html',
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src', 'main', 'favicon.ico'),
          to: PATH_TO_BUILD_FOLDER
        }
      ]),
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        },
      ]
    }


  }


}