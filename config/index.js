// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var colors = require('colors');
let url = ""
// 根据不同的
switch(process.env.NODE_ENV) {
  case "testing":
    uw
    break;
  case "production":
    if (process.argv[2] && process.argv[2] == 'pre') {
      url = "/"
    } else {
      url = "/"
    }
    break;
  default:
    url = "/"
}
console.log("绝对路径地址为:  ".red+url.green);
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: url,
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8888,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '//sctest.9fbank.com/wk/**/*': {
      //   target: 'https://sctest.9fbank.com',
      //   changeOrigin: true
      // },
      // '//sctest.9fbank.com/mall/**/*': {
      //   target: 'https://sctest.9fbank.com',
      //   changeOrigin: true
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  test: {
    env: require('./test.env')
  }
}
