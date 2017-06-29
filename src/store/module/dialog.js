import { UPDATETOAST, UPDATELOADALERT } from "store/mutation-types"
// loading
const state = {
  toast: {
    msg: '',
    time: 1500
  },
  loadAlert: {
    title: '提示', // alert标题
    msg: '', // alert内容
    confCallBack () {}, // 点击确定回调函数
    cancleBack () {} // 点击取消回调函数
  }
}
const mutations = {
  // 更新toast信息
  [UPDATETOAST] (state, obj) {
    // if (state.toast.msg != '') {
    //   return false
    // }
    Object.assign(state.toast, obj)
  },
  // 更新alert弹框信息
  [UPDATELOADALERT] (state, obj) {
    if (!obj.title) { obj.title="提示" }
    state.loadAlert = obj // 更新弹框信息
  }
}
export default {
  state,
  mutations
}
