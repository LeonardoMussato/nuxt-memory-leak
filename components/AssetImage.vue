<template>
  <div class="asset-image" :style="`height: ${height}; width: ${width}; `">
    <img
      :style="`border-radius:${borderRadius}; object-fit: ${imageFit};
    object-position:${imagePosition}`"
      :src="imageAsset"
      :alt="alt"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: "AssetImage",
  props: {
    assetImagePath: {
      type: String,
      reuired: true,
    },
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    imageFit: {
      type: String,
      default: "contain",
    },
    imagePosition: {
      type: String,
      default: "center",
    },
    alt: {
      type: String,
      default: "asset image",
    },
    borderRadius: {
      type: String,
      default: "0",
    },
  },
  computed: {
    imageAsset() {
      return `/${this.assetImagePath}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.asset-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}
</style>
