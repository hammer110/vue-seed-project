import { is_iphone, getQueryString } from 'lib/until'
// 基本配置文件
const state = {
  version: getQueryString('version') || 0,
  Plat: is_iphone()? 'IOS': 'android',
  ver: '5.5.5'
}

const mutations = {
}
export default {
  state,
  mutations
}
