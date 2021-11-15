<template>
  <div class="container">
    <transition name="reveal">
      <div v-if="show" :style="imageStyle" class="floating-image"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { CSSProperties } from "vue";

export default {
  name: "Floating Image",
  data() {
    return {
      show: false,
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries: any) => {
        if (entries[0].isIntersecting === true) {
          setTimeout(() => (this.show = true), this.delay);
        }
        //  else {
        //   setTimeout(() => (this.show = false), this.delay);
        // }
      },
      { threshold: [1] },
    );
    this.observer.observe(this.$el);
  },
  props: {
    url: {
      type: String,
    },
    top: {
      type: String,
    },
    left: {
      type: String,
    },
    right: {
      type: String,
    },
    bottom: {
      type: String,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    delay: {
      type: Number,
    },
  },
  computed: {
    imageStyle(): CSSProperties {
      return {
        position: "absolute",
        width: this.width,
        height: this.height,
        left: this.left,
        top: this.top,
        right: this.right,
        bottom: this.bottom,
        "background-image": `url('${this.url}')`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "background-color":
          this.url != undefined ? "transparent" : "$primary-color",
        "z-index": -1,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./assets/general.scss";
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-right {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.reveal-enter-active {
  -webkit-animation: slide-in-left 1.5s 0.5s forwards;
  animation: slide-in-left 1s forwards;
}
.reveal-leave-active {
  position: absolute;
  -webkit-animation: slide-out-right 2.5s 0.5s both;
  animation: slide-out-right 1s both;
}

.floating-image {
  background-color: $primary-color;
}
</style>
