<template>
   <section>
      <router-view></router-view>

      <!-- toast s -->
      <Toast v-show="dialog.toast.msg != ''"></Toast>
      <!-- toast e -->

      <!-- dialog s-->
      <Dialogs v-show="dialog.loadAlert.msg != ''"></Dialogs>
      <!-- dialog e-->

      <!-- loading s -->
      <Loading></Loading>
      <!-- loading e -->
   </section>
</template>
<script type="text/javascript">
  import { mapActions, mapGetters } from 'vuex'
  import Loading from 'components/common/Loading'
  import Toast from 'components/common/dialog/Toast'
  import Dialog from 'components/common/dialog/'
  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        dialog: "getDialogInfo"
      })
    },
    components: {
      "Loading": Loading,
      "Toast": Toast,
      "Dialogs": Dialog
    },
    methods: {
      ...mapActions([
        "updateUserInfo"
      ])
    },
    created () {
      this.updateUserInfo()
    }
  }
</script>
<style lang="scss">
// 所有样式的集合
  .pop_box {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100000;
  }
  .tip-cont {
      margin: 0rem .90667rem;
      background: #f5f5f5;
      text-align: center;
      position: fixed;
      left: 0;
      right: 0;
      top: 50%;
      z-index: 10000111;
      -webkit-transform: translate(0, -50%);
      -moz-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
      border-radius: .26667rem;
  }
</style>
