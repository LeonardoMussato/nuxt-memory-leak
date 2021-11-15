<template>
  <div class="branded-app-button" @click="() => onClick()">
    <asset-image :assetImagePath="imagePath" :alt="alt" />
  </div>
</template>
<script lang="ts">
export default {
  name: "BrandedAppButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    alt: {
      type: String,
      default: "Generic App",
    },
    imagePath: {
      type: String,
      default: "./app-icons/apple.svg",
    },
  },
};
</script>
<style lang="scss" scoped>
.branded-app-button {
  width: 100%;
  max-width: 250px;
  cursor: pointer;
}
</style>
