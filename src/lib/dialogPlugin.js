// 弹框
const dialog  = {};
import store from 'store/'
dialog.install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
      // 一个按钮弹框
      showDialog: {
        get (){
           return (defaults)=>{
             store.commit('UPDATELOADALERT', defaults)
           }
        }
      },
      showToast: {
        get () {
          return (defaults)=>{
            store.commit('UPDATETOAST', {msg: defaults.msg})
            setTimeout(() => {
              defaults.callBack && defaults.callBack()
              store.commit('UPDATETOAST', {msg: ''})
            }, defaults.time || 1500)
          }
        }
      }
    })
}
export default dialog
