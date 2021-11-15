<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="star-icon"
    id="title-star"
    viewBox="0 0 50 50"
  >
    <path
      d="M25 3.64L18.05 17.7 2.5 19.96 13.75 30.9l-2.66 15.46L25 39.06l13.91 7.3-2.66-15.46L47.5 19.96 31.95 17.7 25 3.64z"
      data-name="star"
    ></path>
  </svg>
</template>

<script lang="ts">
export default {
  name: "Star Icon",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.star-icon {
  width: 25px;
  fill: $primary-color;
  margin: 8px;
}
</style>
