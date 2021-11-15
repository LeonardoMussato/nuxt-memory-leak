<template>
  <div id="hamburger" :class="getOpenClass" :onClick="toggleMenu">
    <svg viewBox="0 0 100 100">
      <path
        class="line line1"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path class="line line2" d="M 20,50 H 80" />
      <path
        class="line line3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </div>
  <transition name="menu">
    <burger-menu v-if="isBodyFixed" :onItemClick="toggleMenu" />
  </transition>
</template>

<script lang="ts">
import { getIsFixedBody, toggleFixedBody } from "../composables/bodyStatus";
export default {
  name: "Burger Icon",
  computed: {
    getOpenClass: function () {
      return { open: this.isBodyFixed };
    },
  },
  setup() {
    return {
      isBodyFixed: getIsFixedBody,
      toggleMenu: toggleFixedBody,
    };
  },
};
</script>

<style lang="scss">
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
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

@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}

.menu-enter-active {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.menu-leave-active {
  -webkit-animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

#hamburger {
  height: 50%;
  width: 37.5px;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  z-index: 5;
  svg {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: contain;
    top: 0;
    left: 0;
  }
  .line {
    fill: none;
    stroke: #ffffff;
    -webkit-text-stroke-color: #ffffff;
    -webkit-text-stroke-width: 6;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms,
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1) 200ms,
      stroke 0.3s ease 200ms;

    &1 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
    &2 {
      stroke-dasharray: 60 60;
      stroke-width: 6;
    }
    &3 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
  }
  &.open .line {
    stroke: #ffffff;
    &1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }
    &2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
    }
    &3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }
  }
}
</style>
