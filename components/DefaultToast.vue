<template>
  <div class="default-toast">{{ text }}</div>
</template>
<script lang="ts">
export default {
  name: "DefaultToast",
  props: {
    text: { type: String, required: true },
  },
};
</script>
<style lang="scss" scoped>
.default-toast {
  background-color: #fff;
  color: black;
  padding: 1em 2em;
  border-radius: 0.5em;
  width: fit-content;
  height: fit-content;
}
</style>
