<template>
  <Link rel="icon" href="/favicon.ico" />
  <Link rel="preconnect" href="https://fonts.googleapis.com" />
  <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <Link
    href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;400;700&family=Rajdhani:wght@500;700&display=swap"
    rel="stylesheet"
  />
  <absolute-container>
    <constrained-box :height="'70vh'">
      <top-background>
        <cool-background
          :wavesNumber="3"
          :isFlipped="true"
          :hideLastWave="true"
        />
      </top-background>
    </constrained-box>
  </absolute-container>
  <div class="app-container" :class="{ fixed: isBodyFixed }">
    <div
      class="app-container__background"
      :style="`opacity: ${isBodyFixed ? '0.5' : '0'}; z-index: ${
        isBodyFixed ? '2' : '0'
      }`"
      @click="() => closeMenu()"
    ></div>
    <the-header :class="{ 'spaced-for-scrollbar': isBodyFixed }" />
    <div id="router-view">
      <NuxtPage />
    </div>
    <the-footer />
  </div>

  <transition name="toaster-component">
    <toaster v-if="currentToast" :currentToast="currentToast" />
  </transition>
</template>
<script lang="ts">
import { getIsFixedBody, closeFixedBody } from "./composables/bodyStatus";
import { getToast } from "./composables/currentToast";
export default {
  name: "Root App",
  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
    };
  },
  setup() {
    return {
      isBodyFixed: getIsFixedBody,
      currentToast: getToast,
      closeMenu: closeFixedBody,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/general.scss";
#__nuxt {
  font-family: "Martel Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $lightest-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fixed {
  overflow: hidden;
  position: fixed;
  margin-right: 5px;
}

.spaced-for-scrollbar .column .padding {
  padding: 2em calc(2em + 2.5px) 2em calc(2em + 2.5px) !important;
}

.app-container {
  width: 100%;
  height: 100%;
  &__background {
    position: fixed;
    background-color: black;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 200ms;
  }
}
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}

.toaster-component-enter-active {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.toaster-component-leave-active {
  position: absolute;
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@media (max-width: 1200px) {
  .fixed {
    margin-right: 0;
  }

  .spaced-for-scrollbar .column .padding {
    padding: 2em !important;
  }
}
</style>
