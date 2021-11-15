<template>
  <div
    class="absolute-container"
    :style="`position:absolute; top:${top}; left:${left}; bottom:${bottom}; right:${right}`"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "AbsoluteContainer",
  props: {
    top: {
      type: String,
      default: "0",
    },
    left: {
      type: String,
      default: "0",
    },
    bottom: {
      type: String,
      default: "auto",
    },
    right: {
      type: String,
      default: "auto",
    },
  },
};
</script>
<style lang="scss" scoped>
.absolute-container {
  width: 100%;
  height: 100%;
}
</style>
