<template>
  <section>my first vue demo</section>
</template>
<script>
// import { showDialog } from 'lib/dialogPlugin'
export default {
  data () {
    return {
      name: '2121',
      goodsInfo: {}
    }
  },
  computed: {
  },
  methods: {
    seckillBox () {
    },
    confrim () {
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  created () {
    this.showToast({
      msg: 'welcome to beijing'
    })
    /**
     * 三种调用方式
     * 1: import showToast 以后 直接执行 showToast({msg: 'welcome'})
     * 2: import showToast.bind(this)({msg: 'welcome'}) 这个时候在方法内this的指向，指向vue实例
     * 3: 配置在mapActions内
     */
    // showDialog.bind(this)({
    //   msg: 'welcome to beijing'
    // })
    // this.$post({
    //   url: '',
    //   data: {
    //     ver: "5.5.5",
    //     Plat: "IOS",
    //     floor: 1
    //   }
    // }).then(res => {
    //   this.$set(this.$data, 'goodsInfo', res.data)
    // })
  },
  mounted () {}
}
</script>
<style media="screen" lang="scss"></style>
