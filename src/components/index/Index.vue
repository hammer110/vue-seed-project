<template>
  <section>my first vue demo</section>
</template>
<script>
export default {
  data () {
    return {
      goodsInfo: {}
    }
  },
  methods: {
    seckillBox () {
      window.location.href = process.env.APIPORT + '/activities/views/activities/activity20170223/secondkill20170223.html?fromChannel='+this.$store.state.config.fromChannel+'&activityBox='+ this.$data.activeProducts.activityBox
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  created () {
    this.$post({
      url: 'https://sc.9fbank.com/wk/index',
      data: {
        ver: "5.5.5",
        Plat: "IOS",
        floor: 1
      }
    }).then(res => {
      this.$set(this.$data, 'goodsInfo', res.data)
    })
  },
  mounted () {}
}
</script>
<style media="screen" lang="scss"></style>
