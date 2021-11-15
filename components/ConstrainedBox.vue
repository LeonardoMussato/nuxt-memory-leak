<template>
  <div class="constrained-box" :style="`width:${width}; height: ${height}`">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "ConstrainedBox",
  props: {
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
};
</script>
<style lang="scss" scoped>
.constrained-box {
  position: relative;
}
</style>
