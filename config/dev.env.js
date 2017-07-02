var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: process.argv[2] && process.argv[2] == 'mock' ? '"mock"':'"development"',
  APIPORT: ""
})
