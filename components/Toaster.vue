<template>
  <div class="toaster">
    <component :is="currentToast.component" :text="currentToast.text" />
  </div>
</template>

<script lang="ts">
import Toast from "../models/toast";
export default {
  name: "Toaster",
  props: {
    currentToast: Toast,
  },
};
</script>
<style lang="scss" scoped>
.toaster {
  &:not(.toaster-component-enter-active):not(.toaster-component-leave-active) {
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, -2%);
  }
  bottom: 2%;
  transform: translate(0, -2%);
  position: fixed;
  width: fit-content;
}
</style>
