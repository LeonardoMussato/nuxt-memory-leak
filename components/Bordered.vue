<template>
  <div class="bordered">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Borderd",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.bordered {
  border: 1px solid $primary-color;
  font-family: $paragraph;
  color: $primary-color;
  font-size: 1.1em;
  height: 1.1em;
  letter-spacing: 0.1em;
  padding: 12px 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: $primary-color;
    color: $lightest-color;
  }
}
</style>
