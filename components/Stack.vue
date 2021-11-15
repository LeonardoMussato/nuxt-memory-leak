<template>
  <div class="stack">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "Stack",
};
</script>
<style lang="scss">
.stack {
  width: 100%;
  height: 100%;
  position: relative;
  & > * {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
