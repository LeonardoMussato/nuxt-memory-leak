<template>
  <div class="shadowed-container">
    <div
      class="shadowed-container__icon"
      :style="`height: ${iconSize}; width: ${iconSize}`"
    >
      <slot />
    </div>
    <div class="shadowed-container__title sub-title neon">
      {{ title }}
    </div>
    <div class="shadowed-container__description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ShadowedContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      default: "2.5em",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/general.scss";
.shadowed-container {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.5em;
  border: solid 3px;
  width: stretch;
  padding: $medium-padding;
  text-align: center;
  box-shadow: 0 0 7px #ffffffbb, 0 0 10px #e89cff66, 0 0 21px #f49dff55,
    0 0 16px #ff00c880, 0 0 10px #ff00dd, inset 0 0 7px #ffffffbb,
    inset 0 0 10px #e89cff66, inset 0 0 21px #f49dff55, inset 0 0 16px #ff00c880,
    inset 0 0 10px #ff00dd;

  &__title {
    margin: 1em 0;
  }

  &__description {
    text-align: center;
    line-height: 1.5em;
  }
}
</style>
