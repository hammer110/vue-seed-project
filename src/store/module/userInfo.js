// 用户信息state
import { getQueryString } from 'lib/until'
import { UPDATEUSREINFO } from 'store/mutation-types'
import _ from "lodash"
const token = getQueryString('userKey') || getQueryString('token') || window.sessionStorage.getItem('token') || ''
const state = {
  token,
  mobile: window.sessionStorage.getItem('mobile') || getQueryString('mobile') || '',
  uid: window.sessionStorage.getItem('uid') || getQueryString('uid') || ''
}
const mutations = {
  [UPDATEUSREINFO] (state, userInfo) {
    _.merge(state, userInfo)
  }
}
export default {
  state,
  mutations
}
