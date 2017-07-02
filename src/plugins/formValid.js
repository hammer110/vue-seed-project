// 自定义表单校验插件
const formValid = {}
import store from 'store/'
const toast = (msg) => {
  store.commit('UPDATETOAST', { msg })
  setTimeout(() => {
    store.commit('UPDATETOAST', {msg: ''})
  }, 1500)
}
formValid.install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    checkAll: { // 全局校验方法
      get () {
        return (ele) => {
          let inputs = ele.find("input, select")
          for (var j = 0; j<inputs.length; j++) {
            if (!$(inputs[j]).attr('pass')) {
              let regs = $(inputs[j]).attr('reg').split(',')
              let val = $(inputs[j]).val().trim()
              for (let i = 0; i < regs.length; i++) {
                let obj = this.$store.state.regex[regs[i]]
                if (!val || val === '') {
                  toast(obj.required)
                  return false
                }
                if (obj.pattern && !(obj.pattern.test(val))) {
                  toast(obj.msg)
                  return false
                }
              }
            }
          }
          return true
        }
      }
    },
    checkAll2: { // 全局校验方法
      get () {
        return (ele) => {
          let inputs = ele.find("input,select")
          for (let i = 0; i<inputs.length; i++) {
            if (!$(inputs[i]).attr('pass')) {
              let obj = this.$store.state.regex[$(inputs[i]).attr('reg')]
              if (!(obj.reg.test($(inputs[i]).val().replace(/\s+/g, "")))) {
                return '请输入'+$(inputs[i]).siblings('label').html()
              }
            }
          }
        }
      }
    }
  })
}
export default formValid
