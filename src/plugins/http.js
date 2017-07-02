import axios from 'axios'
import qs from 'qs'
import config from 'module/config'
import _ from 'lodash'
// loading
const $http = {}
// 初始化axios
const instance = axios.create({
  timeout: 10000
})
// 默认参数
const params = {
  ver: config.state.ver,
  Plat: config.state.Plat
}
import store from 'store/'

/**
 * 定义ajax
 */
export const post = function ({url, data}) {
  return instance({
    method: 'post',
    url,
    data: qs.stringify(_.merge({}, params, data))
  }).then(data => {
    return data
  }, (error) => {
    toast(null, '网络不给力，请重新尝试')
  })
}
$http.install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    // 显示/隐藏遮罩
    $post: {
      get () {
        return (params) => {
          return post(params)
        }
      }
    }
  })
}
// toast框
let toast = (status, message) => {
  store.commit('SHOWLOADINGFLAG', false)
  let msg = status && store.state.errorMsg[status]
  store.commit('UPDATETOAST', {msg: msg || message}) // 弹出toast框
  setTimeout(function (status) {
    store.commit('UPDATETOAST', {msg: ''}) // 此处需要手动添加一个定时器2s以后隐藏toast
  }, 2000)
}
export default $http
