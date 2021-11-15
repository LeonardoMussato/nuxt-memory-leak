<template>
  <div class="row icon-paragraph">
    <div class="icon-paragraph__i">
      <slot name="icon"></slot>
    </div>
    <div class="icon-paragraph__p">
      <slot name="paragraph"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "IconParagraph",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
p {
  margin: 0px 0px;
}
.icon-paragraph {
  margin: 32px 0px;
  padding: 0px 32px;
  &__p {
    font-size: 1.3em;
    font-family: $paragraph;
    text-align: left;
  }
  &__i {
    margin-right: 15px;
    fill: $primary-color;
    width: 25px;
  }
}
</style>
