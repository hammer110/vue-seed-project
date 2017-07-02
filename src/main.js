/*
 * 万卡商城 入口文件 main.js
 * 简介：vue2.0 + vuex + vue-router + axios + es6 + webpack
 * @author master@hammer110.com
*/
import "babel-polyfill"
import Vue from 'vue'                            // vue core
import VueRouter from 'vue-router'               // vue 路由
import routes, { beforeEach, afterEach } from './router/'         // 引入路由表
import { sync } from 'vuex-router-sync'
import App from '@/App'
import formValid from 'plugins/formValid'
import loadPlugin from 'plugins/loading'
import store from 'store/'      // vuex 单向数据里 core
import http from 'plugins/http'
import dialog from 'plugins/dialog'
 // 初始化插件
Vue.use(VueRouter)                               // 声明使用vue-router
Vue.use(http)
Vue.use(dialog)
Vue.use(formValid)
Vue.use(loadPlugin)

import * as fiters from './filter/'      // vuex 单向数据里 core
 // 初始化插件
Vue.use(VueRouter)                               // 声明使用vue-router
Vue.use(formValid)
Object.keys(fiters).forEach(_item => {
  Vue.filter(_item, fiters[_item])
})
const router = new VueRouter({
  routes
})

sync(store, router)
router.beforeEach(beforeEach)
router.afterEach(afterEach)
const initVue = () => {
  new Vue({
    el: '#app',
    router,
    store,
    ...App
  })
}
// 启动项目
initVue()
// 只有在本地开发环境才加载vconsole 便于调试
if (process.env.NODE_ENV !== 'production') {
  require('vconsole')
}
// 引入mock模拟本地开发数据
if (process.env.NODE_ENV == 'mock') {
  require('../mock/')
}
