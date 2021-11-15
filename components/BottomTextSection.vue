<template>
  <div class="bottom-text-section">
    <section-title> PERFECT PINT PARTNERS </section-title>
    <section-body>
      <p>
        Our menu features foodie-friendly
        <span class="body-highlight">street and finger foods</span> for you to
        pair with the perfect pint. We feature many classic pub favorites while
        incorporating subtle but unique Southeast Asian flavors to give your
        taste buds a wake up call.
      </p>
      <p>
        Our small bites are
        <span class="body-highlight">perfect for sharing</span> while our
        sandwiches are hearty enough to satisfy the insatiable. You can enjoy
        our food the same whether you’re here for a quick lunch or enjoying a
        casual night out with friends and family. Be present and talk to each
        other!
      </p>
    </section-body>
  </div>
</template>
<script lang="ts">
export default {
  name: "BottomTextSection",
};
</script>
<style lang="scss" scoped>
@import "./assets/general.scss";
.bottom-text-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: $medium-padding;
}
</style>
