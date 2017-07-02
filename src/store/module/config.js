import { getQueryString } from 'lib/until'
// 基本配置文件
const state = {
  version: getQueryString('version') || 0
}

const mutations = {
}
export default {
  state,
  mutations
}
