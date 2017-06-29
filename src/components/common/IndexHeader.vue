<template>
  <header class="search-form-box flex position" :style="{ background: 'rgba(255,255,255,' + opctiys + ')'}" :class="{'index-page': isIndex, 'list-page': !isIndex, 'opacity-1': opctiys >= 1}">
      <router-link :to="isIndex ? '/category' : '/'" class="cell_0" :class="[isIndex ? 'class' : 'index']">{{isIndex ? '品类' : '首页'}}</router-link>
      <div class="search-form-input cell_1">
          <span class="search-form-icon"></span>
          <input type="text" maxlength="20" value="" id="jsSearch" placeholder="卡地亚手表" class="index_newkeyword" @click="onFocusHandler">
      </div>
      <router-link to="/personal" v-show="true" class="my cell_0">我的</router-link>
   </header>
</template>
<script type="text/javascript">
  export default {
    computed: {
      isIndex: function () {
        return this.$route.name === 'Index'
      }
    },
    props: {
      opctiys: {}
    },
    methods: {
      onFocusHandler: function (e) {
        this.$router.push('/search')
        window.sessionStorage.removeItem('productName')
      },
      backUrl () {
        window.history.go(-1)
      }
    }
  }
</script>
