<template>
  <partial-screen-section :percentual="75">
    <floating-image
      :width="'100%'"
      :height="'80%'"
      :top="'15%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/About-Large-Snacks-1-400x300.jpg'"
      :delay="100"
    />
    <floating-image
      :width="'50%'"
      :height="'70%'"
      :left="'10%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/About-Vertical-Wings-400x535.jpg'"
      :delay="300"
    />
    <!-- <logo-icon /> -->
  </partial-screen-section>
  <section-title> WHO WE ARE </section-title>
  <section-body>
    <p>
      When we opened
      <span class="body-highlight">595 Craft and Kitchen</span> in June 2017,
      our vision was to create an unassuming watering hole for the locals. In a
      town with endless options for bars and lounges, we found it challenging to
      find a friendly bar with a solid craft beer list, good food, and
      non-gaming/non-smoking. We wanted to provide friends and neighbors alike
      with the original form of social networking; a fun easy going bar, and a
      cold pint. Our staunch belief in providing exceptional quality products
      with friendly service in a clean and welcoming setting has helped us earn
      the reputation among the locals as one of the best hidden gems in Las
      Vegas.
    </p>
    <p>
      <span class="body-highlight">Arts District Kitchen </span>is the
      culmination of giving our best to the community by providing great food,
      service, and atmosphere. Tucked inside one of the premier breweries in
      Nevada, this collaboration project allows us another opportunity to create
      a memorable setting for you to catch up with friends and make new ones
      over tasty bites and a refreshing beer.
    </p>
  </section-body>
</template>

<script lang="ts">
export default {
  name: "WhoAreWeSection",
};
</script>
