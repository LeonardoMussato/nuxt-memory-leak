<template>
  <div class="column title-wrapper">
    <div><StarIcon /></div>
    <div>GOOD</div>
    <div>TIMES</div>
    <div><WithTextIcon /></div>
    <div>GREAT</div>
    <div>FRIENDS</div>
    <floating-image
      :width="'60%'"
      :height="'60%'"
      :left="'0'"
      :top="'0'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/Hero-Vertical-Burger-400x527.jpg'"
      :delay="300"
    />
    <floating-image
      :width="'65%'"
      :height="'50%'"
      :bottom="'0'"
      :right="'0'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/Hero-Horizontal-Banh-Mis-400x267.jpg'"
      :delay="500"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Main Title",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.title-wrapper {
  font-family: $title;
  height: 75vh;
  font-size: 6em;
  line-height: 0.8;
  text-shadow: 0px 0px 3px #00000099;
  color: $primary-color-light;
}
</style>
