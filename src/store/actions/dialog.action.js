/**
* 更新toast框信息 ({msg: 弹框信息, callBack: 隐藏的时候回调函数, time: setimeout时间})
* @param {Object} args
*/
import store from 'store/'
export const updateToast = ({ commit }, ...args) => {
  commit('UPDATETOAST', {msg: args[0].msg})
  // // 2s以后重新调用此函数，隐藏掉toast框
  setTimeout(() => {
    args[0].callBack && args[0].callBack()
    store.commit('UPDATETOAST', {msg: ''})
  }, args[0].time || 1500)
}
/**
* 更新alert框信息 ({msg: 弹框信息, callBack: 隐藏的时候回调函数, time: setimeout时间})
* @param {Object} args
*/
export const showTwoBtnDialog = ({ commit }, ...args) => {
  let defaults = {
    title: '提示',
    msg: '',
    rBtnText: '确定',
    lBtnText: '取消',
    confCallBack: null,
    cancelBack () {
      store.commit('UPDATELOADALERT', defaults)
    }
  }
  commit('UPDATELOADALERT', Object.assign(defaults, args[0]))
}
// 一个button按钮的弹框
export const showOneBtnDialog = ({ commit }, ...args) => {
  let defaults = {
    title: '提示',
    msg: '',
    rBtnText: '确定',
    confCallBack () {
      store.commit('UPDATELOADALERT', defaults)
    }
  }
  commit('UPDATELOADALERT', Object.assign(defaults, args[0]))
}
