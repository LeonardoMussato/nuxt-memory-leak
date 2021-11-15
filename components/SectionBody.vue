<template>
  <div class="section-body">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "Section Body",
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.section-body {
  font-family: $body;
  text-align: justify;
  font-size: 1em;
  line-height: 1.8;
  font-weight: 200;
  padding: 0 1.5em;
  padding-bottom: $medium-padding;
}
</style>
