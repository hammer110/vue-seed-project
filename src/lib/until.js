import Base64 from 'lib/Base64'
// 判断当前是否是安卓手机
export const is_android = () => {
  var ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
    return true
  } else {
    return false
  }
}
// 判断当前是否是iphone手机
export const is_iphone = () => {
  var ua = navigator.userAgent.toLocaleLowerCase()
  if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('macintosh') > -1) {
    return true
  } else {
    return false
  }
}
// 截取url 里面token的值
export const getQueryString = name => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  let params = window.location.search.substr(1) || window.location.href.split('?')[1]
  let r = params && params.match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
// 格式化金额
export const fixed2NoRound = (money) => {
  let newMoney=Math.ceil((money*100).toFixed(5))/100;
  return newMoney.toFixed(2)
}
