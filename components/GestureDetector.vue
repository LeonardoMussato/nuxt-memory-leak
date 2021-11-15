<template>
  <div class="gesture-detector" @click="() => onClick()">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "GestureDetector",
  props: {
    onClick: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.gesture-detector {
  width: fit-content;
  height: fit-content;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
}
</style>
