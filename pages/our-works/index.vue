<template>
  <column :crossAxisAlignment="'center'">
    <safe-area>
      <our-works />
    </safe-area>
  </column>
</template>
<script lang="ts">
export default {
  name: "OurWorksPage",
  head() {
    return {
      title: "Italians Code It Better - Our Works",
      meta: [
        {
          name: "description",
          content:
            "We love our job. We love our works. Here they are some of the projects we built so far.",
        },
      ],
    };
  },
};
</script>
