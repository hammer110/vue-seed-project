<template>
   <transition name="loading">
     <div class="loading" v-show="$store.state.loading.isShowLoadFlag">
        <div class="loadProcess"></div>
     </div>
   </transition>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        loadInfo: "getLoadInfo"
      })
    }
  }
</script>
<style media="screen" scoped>
  .loading{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    transition: all .2s cubic-bezier(0.18, 0.65, 1, 1);
    -webkit-transition: all .2s cubic-bezier(0.18, 0.65, 1, 1);
  }
  .loadProcess{
    width: 3.335rem;
    height: 3.335rem;
    background: rgba(0, 0, 0, .6) url('../../assets/icon/icon/loading.gif') no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 15px;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    background-size: 100% 100%;
  }
  .loading-enter-active, .loading-leave-active {

   }
   .loading-enter, .loading-leave-active {
    opacity: 0;
  }
</style>
