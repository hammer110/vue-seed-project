import Vue from 'vue'
import Vuex from 'vuex'
import api from './module/api'                       // 接口地址
import dialog from './module/dialog'               // 公共弹框信息
import userInfo from './module/userInfo'             // 用户信息
import loading from './module/loading'         // 附属信息
import regex from './module/regex'         // 借款信息
import config from './module/config'         // 基础配置文件
import actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
// 区分是否是线上环境, 线下环境错误信息会生成日志
const debug = process.env.NODE_ENV !== 'production'
// 初始化vuex
const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    api,
    regex,
    dialog,
    userInfo,
    loading,
    config
  },
  strict: debug
})
export default store

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions')
    })
  })
}
