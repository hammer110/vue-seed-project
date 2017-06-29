<template id="">
  <header class="head-cont flex">
       <a class="return cell_0 conBill_btn" href="javascript:void(0)"  v-if="isTxt == 3"></a>
       <a class="return cell_0" href="javascript:void(0)" @click="backUrl" v-else></a>
       <span class="tit cell_1">{{$route.meta.title}}</span>
       <router-link tag="a" to="totalactivityRule" class="cell_0" :class="[isTxt ? 'txt_r' : '']" v-if="isTxt == 1">红包说明</router-link>
       <span class="cell_0" :class="[isTxt ? 'txt_r' : '']" v-else-if="isTxt == 2" id="popupShow">发票须知</span>
       <router-link tag="a" to="contactCS" class="cell_0" :class="[isIcon ? 'cs_icon' : '']" v-else-if="isIcon"></router-link>
      <span class="empty_r cell_0" v-else></span>
   </header>
</template>
<script type="text/javascript">
  import { getQueryString } from 'lib/until'
  export default {
    computed: {
      isTxt: function () {
        if (this.$route.name === 'MyRedpacket' || this.$route.name === 'Redpacket') {
          return 1
        }
        if (this.$route.name === 'Invoice') {
          return 2
        }
        if (this.$route.name === 'Conbill') {
          return 3
        }
      },
      isIcon: function () {
        if (this.$route.name === 'Personal') {
          return 1
        }
      }
    },
    props: {
      url: ''
    },
    methods: {
      backUrl () {
        const currentName = this.$store.state.route.name
        const fromChannel = this.$store.state.config.fromChannel
        if (currentName == "Personal") {
          this.$router.push('/')
        } else if (currentName == 'Confirmorder') {
          const page = window.sessionStorage.getItem('page')
          if (page) {
            window.history.go(-4)
            window.sessionStorage.removeItem('page')
          } else {
            window.history.back()
          }
        } else if (currentName == 'VirtualDetail') {
          this.$router.push('/')
        } else if (currentName == 'Detail') {
          const goAuthorize = getQueryString('goAuthorize') || this.$store.state.route.query['goAuthorize'] || ''
          if (goAuthorize != '') {
            this.$router.push('/')
          } else {
            window.history.back()
          }
        } else if (currentName == 'UnionLoginFail') {
          // 如果跳转到失败页面
          if (fromChannel == 'wk') {
            window.location.href = process.env.ONECARD
          } else {
            window.history.back()
          }
        } else {
          window.history.back()
        }
      }
    }
  }
</script>
