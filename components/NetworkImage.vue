<template>
  <div class="network-image" :style="`height: ${height}; width: ${width}`">
    <stack>
      <transition name="network-image-transition">
        <column
          :crossAxisAlignment="`center`"
          :mainAxisAlignment="'center'"
          v-if="errorIsPresent"
        >
          <error-icon />
        </column>
        <img :src="networkImageUrl" v-else-if="hasLoadedComponent" />
        <asset-image :assetImagePath="`./default.png`" v-else />
      </transition>
    </stack>
  </div>
</template>
<script lang="ts">
import axios, { AxiosResponse } from "axios";
export default {
  name: "NetworkImage",
  data() {
    return {
      hasLoadedComponent: false,
      errorIsPresent: false,
    };
  },
  props: {
    networkImageUrl: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
  async beforeMount() {
    try {
      const payload: AxiosResponse = await axios.get(this.networkImageUrl);
      if (payload.status === 200) {
        this.hasLoadedComponent = true;
      } else {
        this.errorIsPresent = true;
      }
    } catch (_error) {
      this.errorIsPresent = true;
    }
  },
};
</script>
<style lang="scss" scoped>
@-webkit-keyframes fade-out-bck {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
}
@keyframes fade-out-bck {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
}
@-webkit-keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
.network-image-transition-leave-active {
  -webkit-animation: fade-out-bck 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: fade-out-bck 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.network-image-transition-enter-active {
  -webkit-animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-hor-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.network-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
