<template>
  <div class="contact-us">
    <contact-form />
  </div>
</template>
<script lang="ts">
export default {
  name: "ContactUsSection",
};
</script>
<style lang="scss" scoped>
.contact-us {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .safe-area {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
