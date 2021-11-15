<template>
  <partial-screen-section :percentual="50">
    <floating-image
      :width="'40%'"
      :height="'60%'"
      :top="'8%'"
      :left="'25%'"
      :delay="900"
    />
    <floating-image
      :width="'59%'"
      :height="'73%'"
      :top="'17%'"
      :left="'35%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/Menu-Intro-1-Burger-Beer-400x515.jpg'"
      :delay="500"
    />
    <floating-image
      :width="'50%'"
      :height="'65%'"
      :top="'23%'"
      :left="'5%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/Menu-Intro-2-Banh-Mi-1-400x607.jpg'"
      :delay="100"
    />
  </partial-screen-section>
</template>

<script lang="ts">
export default {
  name: "ImagesSection",
};
</script>
