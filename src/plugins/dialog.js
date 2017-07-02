// 弹框
const dialog = {}
import store from 'store/'

// 显示dialog
export const showDialog = function (defaults) {
  store.commit('UPDATELOADALERT', defaults)
}

// 显示toast框
export const showToast = function (defaults) {
  store.commit('UPDATETOAST', {msg: defaults.msg})
  setTimeout(() => {
    defaults.callBack && defaults.callBack()
    store.commit('UPDATETOAST', {msg: ''})
  }, defaults.time || 1500)
}
dialog.install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    // 一个按钮弹框
    showDialog: {
      get () {
        return (defaults) => {
          return showDialog(defaults)
        }
      }
    },
    showToast: {
      get () {
        return (defaults) => {
          return showToast(defaults)
        }
      }
    }
  })
}
export default dialog
