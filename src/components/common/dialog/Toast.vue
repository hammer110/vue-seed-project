<template id="">
  <div class="field-tooltipWrap">
      <div class="field-tooltip fieldTipBounceIn">
        <div class="zvalid-resultformat">{{dialog.toast.msg}}</div>
      </div>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        dialog: "getDialogInfo"
      })
    }
  }
</script>
<style media="screen" lang="scss">
  @import "../../../assets/scss/app.scss";
  .field-tooltipWrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  .field-tooltip {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
  }
  .field-tooltip .field-invalidmsg, .field-tooltip .field-validmsg {
    color: #fff;
    background-color: rgba(0, 0, 0, .8);
  }

  .field-tooltip .zvalid-resultformat {
    display: inline-block;
    position: relative;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    @include px2rem(padding,20 25);
    @include px2rem(border-radius,10);
    @include font-dpr(28);
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    pointer-events: auto;
    animation-name: fieldTipBounceIn;
    -webkit-animation-name: fieldTipBounceIn;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .18s;
    animation-duration: .18s
  }
  @-webkit-keyframes fieldTipBounceIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3)
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1)
    }
  }

  @keyframes fieldTipBounceIn{
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3)
    }
    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1)
    }
  }
</style>
