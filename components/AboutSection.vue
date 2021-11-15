<template>
  <partial-screen-section :percentual="70">
    <floating-image
      :width="'90%'"
      :height="'65%'"
      :top="'15%'"
      :left="'5%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/The-Brewery-Large-Tanks-400x285.jpg'"
      :delay="100"
    />
    <floating-image
      :width="'60%'"
      :height="'45%'"
      :top="'45%'"
      :left="'40%'"
      :url="'https://artsdistrictkitchen.com/wp-content/uploads/2019/10/The-Brewery-Small-Outside-400x264.jpg'"
      :delay="200"
    />
    <floating-image
      :width="'60%'"
      :height="'60%'"
      :url="'https://ablebakerbrewing.com/wp-content/uploads/abb-logo-200x.png'"
      :delay="300"
    />
  </partial-screen-section>
  <section-title> ABOUT ABLE BAKER </section-title>
  <section-body>
    <p>
      Able Baker Brewing derives its name from the first two atomic bombs
      detonated at the Nevada Test Site. These two test explosions were
      code­named after the military’s phonetic alphabet of the time, making them
      tests “Able” and “Baker”.
    </p>
    <p>
      The experimentation at the Nevada Test Site led to the refining of the
      Atomic Bomb and the ushering in of the Nuclear Age. This was a notable
      time in Nevada as “Atomic Blast” viewing parties were commonplace and
      several “Miss Atomic” beauty queens were crowned. The Atomic Age
      influences our artwork and concepts while allowing us to give a respectful
      nod to Nevada’s unique state history.
    </p>
  </section-body>
</template>

<script lang="ts">
export default {
  name: "AboutSection",
};
</script>
