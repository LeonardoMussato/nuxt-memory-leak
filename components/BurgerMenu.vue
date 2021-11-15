<template>
  <div class="burger-menu">
    <column
      :mainAxisAlignment="'center'"
      :crossAxisAlignment="'center'"
      :gap="'2em'"
    >
      <div @click="() => onItemClick()">
        <burger-menu-item :path="'/'">Home</burger-menu-item>
      </div>
      <div @click="() => onItemClick()">
        <burger-menu-item :path="'/our-works'">Work</burger-menu-item>
      </div>
      <div @click="() => onItemClick()">
        <burger-menu-item :path="'/contact-us'">Contact us</burger-menu-item>
      </div>
    </column>
  </div>
</template>

<script lang="ts">
export default {
  name: "Burger Menu",
  props: {
    open: {
      type: Boolean,
    },
    onItemClick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    isOpen: function () {
      return { open: this.open };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/general.scss";
.burger-menu {
  position: fixed;
  height: 100vh;
  width: 30vw;
  background-color: $dark-color;
  z-index: 3;
  top: 0;
  right: 0;
}

.burger-menu .center {
  justify-content: center;
  height: 100%;
}
@media (max-width: 900px) {
  .burger-menu {
    height: 100vh;
    width: 100vw;
    z-index: 3;
    top: 0;
    left: 0;
  }
}
</style>
