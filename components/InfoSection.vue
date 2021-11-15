<template>
  <div class="info-section">
    <icon-paragraph>
      <template v-slot:icon>
        <pin-icon />
      </template>
      <template v-slot:paragraph>
        <p>1510 SOUTH MAIN STREET</p>
        <p>LAS VEGAS, NV 89104</p>
        <p>
          LOCATED INSIDE OF
          <span class="color-primary">ABLE BAKER BREWING</span>
        </p>
        <p><span class="color-primary">702.479.6355</span></p>
      </template>
    </icon-paragraph>
    <icon-paragraph>
      <template v-slot:icon>
        <clock-icon />
      </template>
      <template v-slot:paragraph>
        <p><span class="color-primary-light">SUN-THURS:</span> 12PM-10PM</p>
        <p><span class="color-primary-light">FRI-SAT:</span> 12PM-11PM</p>
      </template>
    </icon-paragraph>
  </div>
</template>

<script lang="ts">
export default {
  name: "InfoSection",
};
</script>
<style lang="scss" scoped>
.info-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
