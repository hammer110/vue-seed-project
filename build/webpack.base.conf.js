var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')
var colors = require('colors')
var configObj = {}
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const env = process.env.NODE_ENV
switch (env) {
  case 'production':
    configObj = config['build']
    break;
  case 'testing':
    configObj = config['test']
    break;
  default:
    configObj = config['dev']
    break;
}
console.log("绝对路径地址为:  ".red+configObj.publicPath)
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: configObj.assetsRoot,
    filename: '[name].js',
    publicPath: configObj.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
      'lib': path.resolve(__dirname, '../src/lib'),
      'plugins': path.resolve(__dirname, '../src/plugins'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'scss': path.join(__dirname, '../src/assets/scss'),
      'components': path.resolve(__dirname, '../src/components'),
      'store': path.resolve(__dirname, '../src/store'),
      'module': path.resolve(__dirname, '../src/store/module'),
      'actions': path.resolve(__dirname, '../src/store/actions')
    }
  },
  plugins: [//插件项
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'//引入zepto
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
