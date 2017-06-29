// 路由配置表
// 首页
const Index = r => require.ensure([], () => r(require('components/index/Index')), 'Index')
let routes = [
  // 首页
  {
    path: "/",
    name: 'Index',
    component: Index,
    meta: { title: "\u54c1\u8d28\u5546\u57ce" }
  }
]

// 路由跳转hook函数
export const beforeEach = (to, from, next) => {
  next()
}
export const afterEach = route => {
  document.body.scrollTop = 0
}
export default routes
