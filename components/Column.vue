<template>
  <div
    class="column"
    :style="`gap: ${gap}; align-items: ${crossAxisAlignment}; justify-content: ${mainAxisAlignment}; height:${mainAxisSize}; width:${crossAxisSize}`"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "Column",
  props: {
    gap: {
      type: String,
      default: "0",
    },
    crossAxisAlignment: {
      type: String,
      default: "flex-start",
    },
    mainAxisSize: {
      type: String,
      default: "100%",
    },
    crossAxisSize: {
      type: String,
      default: "100%",
    },
    mainAxisAlignment: {
      type: String,
      default: "flex-start",
    },
  },
};
</script>
<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
}

@supports (-webkit-touch-callout: none) and (not (translate: none)) {
  .column > :not(:last-child) {
    margin-bottom: 1em;
  }
}
</style>
