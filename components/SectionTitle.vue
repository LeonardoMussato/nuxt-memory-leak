<template>
  <div class="section-title">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Section title",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.section-title {
  font-family: $serif;
  text-align: left;
  line-height: 0.9;
  font-size: 2.7em;
  color: $primary-color;
  padding: 0 0.5em;
}
</style>
