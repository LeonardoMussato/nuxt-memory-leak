<template>
  <div class="squared-container" :style="`width:${size}`">
    <absolute-container>
      <slot />
    </absolute-container>
  </div>
</template>

<script lang="ts">
export default {
  name: "SquaredContainer",
  props: {
    size: {
      type: String,
      default: "100%",
    },
  },
};
</script>

<style lang="scss" scoped>
.squared-container {
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
</style>
