<template>
  <column class="main-container" :crossAxisAlignment="'center'" :gap="'2em'">
    <safe-area>
      <column :gap="'5em'" :crossAxisAlignment="'center'">
        <home-section />
        <our-values />
        <our-works />
      </column>
    </safe-area>
    <contact-us />
  </column>
</template>

<script lang="ts">
export default {
  name: "MainPage",
  head() {
    return {
      title: "Italians Code It Better - Home",
      meta: [
        {
          name: "description",
          content:
            "We are passionate software developers, who love challenges and learning new things. Always with the head through the code, we create products with the best technologies available that fit what is needed.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 768px) {
  .main-container {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
