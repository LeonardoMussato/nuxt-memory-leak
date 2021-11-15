<template>
  <div class="main-description">
    <div class="main-description__background" v-if="hasBackgroundSlot">
      <slot name="background"></slot>
    </div>
    <safe-area>
      <div
        class="main-description__foreground"
        :style="`flex-direction: ${!isLeft ? 'row' : 'row-reverse'}`"
      >
        <div class="main-description__foreground--text">
          <column :mainAxisAlignment="'center'" :gap="'2em'" class="responsive">
            <h1 v-if="title" class="title cursive neon">
              {{ title }}
            </h1>
            <div>{{ text }}</div>
          </column>
        </div>
        <div class="main-description__foreground--img" v-if="hasImageSlot">
          <slot name="image"></slot>
        </div>
      </div>
    </safe-area>
  </div>
</template>
<script lang="ts">
export default {
  name: "MainDescription",
  props: {
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    isLeft: {
      type: Boolean,
    },
  },
  computed: {
    hasBackgroundSlot() {
      return !!this.$slots.background;
    },
    hasImageSlot() {
      return !!this.$slots.image;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/general.scss";
.main-description {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  text-align: left;
  line-height: 1.8em;
  justify-content: space-between;
  &__background {
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    opacity: 0.6;
  }
  &__foreground {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4em 0;
    width: stretch;

    &--text {
      color: $text-color;
      width: 100%;
      max-width: 600px;
      font-size: 1.5em;
      h1 {
        width: fit-content;
        height: fit-content;

        background-clip: text;
        font-size: 1.5em;

        font-weight: normal;
      }
      .title {
        font-size: 2.2em;
      }
    }

    &--img {
      max-width: 550px;
      width: 100%;
    }
  }
}
@media (max-width: 900px) {
  .main-description__foreground {
    flex-direction: column !important;
    align-items: center;
    text-align: center;
    padding: 4em 1em;
    gap: 2em;
    &--text {
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 1.1em;
      }
    }
  }

  .responsive {
    align-items: center !important;
  }
}
</style>
