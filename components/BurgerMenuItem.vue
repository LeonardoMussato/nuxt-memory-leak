<template>
  <div class="burger-menu-item cursive">
    <nuxt-link :to="path"><slot /></nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Burger Menu Item",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./assets/general.scss";
.burger-menu-item {
  font-size: 3em;
  color: $lightest-color;
}

.burger-menu-item > a {
  text-decoration: none;
  color: $lightest-color;
}

.burger-menu-item > a:visited {
  color: $lightest-color;
}

.burger-menu-item > a.router-link-exact-active {
  text-shadow: 0 0 7px #ffffffbb, 0 0 10px #e89cff66, 0 0 21px #ffffff55,
    0 0 32px #ff00c880, 0 0 50px #ff00dd;
}

.burger-menu-item .star-icon {
  fill: $dark-color;
  display: none;
  margin: 0px 8px;
}

.burger-menu-item > a.router-link-exact-active .star-icon {
  display: inline-block;
}
</style>
