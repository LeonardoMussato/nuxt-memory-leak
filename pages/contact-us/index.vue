<template>
  <column :crossAxisAlignment="'center'">
    <contact-us />
  </column>
</template>
<script lang="ts">
export default {
  name: "ContactUsPage",
  head() {
    return {
      title: "Italians Code It Better - Contact Us",
      meta: [
        {
          name: "description",
          content:
            "This is the page where you can interact with us. Send us an email to tell us your ideas and how we can help you realizing it.",
        },
      ],
    };
  },
};
</script>
