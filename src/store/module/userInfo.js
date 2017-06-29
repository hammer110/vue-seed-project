// 用户信息state
import { UPDATEUSREINFO } from 'store/mutation-types'
import _ from "lodash"
const state = {
  token: ''
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
