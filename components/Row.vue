<template>
  <div
    class="row"
    :style="`gap: ${gap}; align-items: ${crossAxisAlignment}; justify-content: ${mainAxisAlignment};`"
    :class="{ responsive: isResponsive }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "Row",
  props: {
    gap: {
      type: String,
      default: "0",
    },
    crossAxisAlignment: {
      type: String,
      default: "flex-start",
    },
    mainAxisAlignment: {
      type: String,
      default: "flex-start",
    },
    isResponsive: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .responsive {
    flex-direction: column;
  }
}

@supports (-webkit-touch-callout: none) and (not (translate: none)) {
  .row:not(.responsive) {
    & > :not(:last-child) {
      margin-right: 1em;
    }
    & > :last-child {
      margin-right: 0;
    }
  }

  .responsive > :not(:last-child) {
    margin-right: 0;
    margin-bottom: 1em;
  }
}
</style>
