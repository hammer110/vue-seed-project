import { SHOWLOADINGFLAG } from "store/mutation-types"
const state = {
  isShowLoadFlag: false
}

const mutations = {
  [SHOWLOADINGFLAG] (state, isShowLoadFlag) {
    state.isShowLoadFlag = isShowLoadFlag
  }
}

export default {
  state,
  mutations
}
