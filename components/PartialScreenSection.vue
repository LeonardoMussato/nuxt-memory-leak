<template>
  <div :style="getStyle" class="partial-screen-section">
    <slot />
  </div>
</template>

<script lang="ts">
import { CSSProperties } from "vue";

export default {
  name: "Partial Screen Section",
  props: {
    percentual: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getStyle(): CSSProperties {
      return {
        height: this.percentual + "vh",
        width: "100%",
        position: "relative",
      };
    },
  },
};
</script>
