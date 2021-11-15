<template>
  <div
    class="padding"
    :style="`padding: ${paddingValue}; height: ${
      expandedHeight ? '' : 'fit-content'
    }; width: ${expandedWidth ? '' : 'fit-content'}`"
  >
    <div class="padding__content" :style="`height: ${height}; width: ${width}`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Padding",
  props: {
    paddingValue: {
      type: String,
      default: "8px",
    },
    expandedHeight: {
      type: Boolean,
      default: true,
    },
    expandedWidth: {
      type: Boolean,
      default: true,
    },
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
.padding {
  width: stretch;
  height: stretch;
}
</style>
