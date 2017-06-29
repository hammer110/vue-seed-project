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
