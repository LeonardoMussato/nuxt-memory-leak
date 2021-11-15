<template>
  <div class="grid-container" :style="gridContainerStyle">
    <slot />
  </div>
</template>
<script lang="ts">
import { CSSProperties } from "vue";

export default {
  name: "GridContainer",
  props: {
    perLine: {
      type: Number,
      default: 2,
    },
    gap: {
      type: String,
      default: "2em",
    },
  },
  computed: {
    gridContainerStyle() {
      return `grid-template-columns: repeat(${this.perLine}, 1fr); gap:${this.gap}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-container {
  display: grid;
}
@media (max-width: 900px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
