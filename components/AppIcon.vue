<template>
  <div class="app-icon">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "AppIcon",
};
</script>
<style lang="scss" scoped>

@import "./assets/general.scss";
.app-icon {
  background-color: $lightest-color;
  border-radius: 1em;
  max-width: 65px;
  width: 100%;
  padding: 1em;
  height: 100%;
  max-height: 65px;
}

@media (max-width: 768px) {
  .app-icon {
    max-width: 65px;
    max-height: 65px;
  }
}

@media (max-width: 600px) {
  .app-icon {
    max-width: 40px;
    max-height: 40px;
  }
}
</style>
