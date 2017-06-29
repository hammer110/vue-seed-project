// 正则表达式&对应的错误信息提示语
let state = {
  phone: {
    required: '请输入手机号码',
    pattern: /^0?(13|15|18|14|17)[0-9]{9}$/,
    msg: "您输入的手机号码格式不正确"
  },
  phoneyzm: {
    required: "请输入验证码",
    pattern: /^[0-9]{6}$/,
    msg: '请输入6位数验证码'
  },
  newPassword: {
    required: "请输入新密码",
    pattern: /^[a-zA-Z0-9]{6,12}$/,
    msg: '请输入6-12位数字或英文新密码'
  },
  oldPassword: {
    required: "请输入旧密码",
    pattern: /^[a-zA-Z0-9]{6,12}$/,
    msg: '请输入6-12位数字或英文旧密码'
  },
  password: {
    required: "请输入密码",
    pattern: /^[a-zA-Z0-9]{6,12}$/,
    msg: '请输入6-12位数字或英文密码'
  },
  name: {
    required: "请输入正确的姓名",
    pattern: /^[\u4E00-\u9FA5·]{2,10}$/,
    msg: "请输入正确的姓名"
  },
  idnumbers: {
    required: '请输入正确的身份证号码',
    msg: '请输入正确的身份证号码'
  },
  bankCardNo: {
    required: '请输入银行卡号',
    msg: '请输入正确的银行卡号'
  },
  bankPhone: {
    required: '请输入银行预留手机号',
    pattern: /^0?(13|15|18|14|17)[0-9]{9}$/,
    msg: '请输入正确的预留手机号'
  },
  addDetail: {
    required: '请输入详细地址',
    msg: '请输入详细地址'
  },
  address: {
    required: '请选择地区信息',
    msg: '请选择地区信息'
  }
}
// 更新用户数据数据
let mutations = {
}

export default {
  state,
  mutations
}
