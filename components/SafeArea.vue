<template>
  <div class="safe-area">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "SafeArea",
};
</script>
<style lang="scss" scoped>
.safe-area {
  width: 100%;
  max-width: 1200px;
}
@media (max-width: 1200px) {
  .safe-area {
    padding: 0 2em;
    width: stretch;
  }
}
</style>
