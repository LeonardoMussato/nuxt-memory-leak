<template>
  <div class="home">
    <main-description
      :title="`It can be done`"
      :text="`We are passionate software developers, who love challenges and learning new things. Always with the head through the code, we create products with the best technologies available that fit what is needed.`"
    >
      <template v-slot:image>
        <asset-image :assetImagePath="`./logo_with_background.svg`" />
      </template>
    </main-description>
  </div>
</template>
<script lang="ts">
export default {
  name: "HomeSection",
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: stretch;
}
</style>
