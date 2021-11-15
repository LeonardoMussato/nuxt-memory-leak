<template>
  <div class="spacer-text-bordered">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Spacer Text",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.spacer-text-bordered {
  width: 80%;
  padding: 16px 0px;
  border-top: 7px solid $primary-color;
  border-bottom: 7px solid $primary-color;
  color: $primary-color;
  font-family: $serif;
  font-size: 1.8em;
  line-height: 0.9;
}
</style>
