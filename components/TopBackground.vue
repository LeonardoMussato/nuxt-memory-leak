<template>
  <div class="top-background">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Top bakcground",
};
</script>

<style>
.top-background {
  position: absolute;
  top: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
