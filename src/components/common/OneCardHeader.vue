<template>
  <header class="search-form-box2 flex position">
    <div class="cell_1 jump_box">
        <a href="javascript:;" class="wkindex_url" @click="backWk()" v-if="$store.state.config.version < 9"><img src="../../assets/icon/icon/gb@2x_grey.png"></a>
        <router-link to="/category" class="pzlist_url"><img src="../../assets/icon/icon/pzlist_03.png"></router-link>
    </div>
    <div class="cell_1 pzsc_title">分期商城</div>
    <div class="cell_1 custom_box">
        <router-link to="/contactCS" class="custom_url"><img src="../../assets/icon/icon/custom_03.png"></router-link>
        <span class="member_jump" @click="showMenu"><img src="../../assets/icon/icon/memberlist_03.png"></span>
    </div>
  </header>
</template>
<script type="text/javascript">
  export default {
    methods: {
      backWk () {
        const url = process.env.ONECARD
        window.location.href = url
      },
      showMenu () {
        this.$emit('showMenu', true)
      }
    },
    created () {
    }
  }
</script>
