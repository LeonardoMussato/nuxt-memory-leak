<template>
  <div class="generic-image-app-button" @click="() => onClick()">
    <div class="generic-image-app-button__icon">
      <asset-image
        :assetImagePath="imagePath"
        :alt="alt"
        :borderRadius="'0.3em'"
      />
    </div>
    <div class="generic-image-app-button__texts">
      <h1 v-if="title">{{ title }}</h1>
      <span v-if="description">{{ description }}</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "GenericImageAppButton",
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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.generic-image-app-button {
  width: stretch;
  max-width: 265px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  padding: 0.3em;
  border: 1px solid white;
  border-radius: 10px;
  &__icon {
    max-width: 65px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__texts {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
