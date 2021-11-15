<template>
  <div class="plane-background" :style="`background-color: ${bgColor}`"></div>
</template>
<script lang="ts">
export default {
  name: "PlaneBackground",
  props: {
    bgColor: { type: String, default: "#fff" },
  },
};
</script>
<style lang="scss" scoped>
.plane-background {
  width: 100%;
  height: 100%;
}
</style>
