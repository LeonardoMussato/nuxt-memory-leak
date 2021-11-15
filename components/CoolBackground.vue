<template>
  <svg
    ref="waves"
    :style="`${
      isFlipped ? 'transform: rotate(180deg);' : ''} opacity: ${opacity}`"
    height="100%"
    width="100%"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="none"
  ></svg>
</template>
<script lang="ts">
import { SVG } from "@svgdotjs/svg.js";
import { random, map, spline } from "@georgedoescode/generative-utils";
import tinycolor from "tinycolor2";

export default {
  name: "CoolBackground",
  props: {
    height: {
      type: String,
      default: "100%",
    },
    width: {
      type: String,
      default: "100%",
    },
    wavesNumber: {
      type: Number,
      default: 5,
    },
    isFlipped: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Number,
      default: 1,
    },
    hideLastWave: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    wave(start: any, end: any, gradient: any) {
      const numSteps = random(4, 8, true);
      const { min, max } = this.getWaveDim;
      const randomRange = random(min, max);

      const points = [];

      for (let i = 0; i <= numSteps; i++) {
        const step = map(i, 0, numSteps, 0, 1);

        let x = this.lerp(start.x, end.x, step);
        let y = this.lerp(start.y, end.y, step);

        if (i !== 0 && i !== numSteps) {
          x += random(-randomRange, randomRange);
          y += random(-randomRange, randomRange);
        }

        points.push({ x, y });
      }

      const pathData =
        spline(points, 1, false) +
        `L ${end.x} ${this.svgHeight} L ${start.x} ${this.svgHeight} Z`;

      this.svg.path(pathData).attr("fill", gradient);
    },
    lerp(v0: number, v1: number, t: number) {
      return v0 * (1 - t) + v1 * t;
    },
    generate() {
      const numWaves = this.wavesNumber;
      const base = tinycolor(`hsl(${random(170, 360)}, 65%, 55%)`);
      const colors = base.analogous(6);
      if (!this.hideLastWave) {
        this.svg
          .rect(this.svgWidth, this.svgHeight)
          .fill(random(colors).clone().darken(40).toString());
      }

      for (let i = 0; i < numWaves; i++) {
        const randomOffset = random(-50, 50);
        const originY =
          map(i, 0, numWaves, -this.svgHeight / 2, this.svgHeight / 3) +
          randomOffset;
        const endY = map(i, 0, numWaves, 0, 1000) + randomOffset;

        const color = random(colors).clone();

        if (i < 3) {
          color.darken(50).desaturate(10);
        }

        const gradientOffset = map(i, 0, numWaves, 0.1, 1);

        let gradient = this.svg.gradient("linear", function (add: any) {
          add.stop(0, color.clone().lighten(30).toHexString());
          add.stop(gradientOffset, color.clone().spin(60).toHexString());
        });
        gradient.from(0.5, 0).to(0, 1);
        if (i == 0 && this.hideLastWave) {
          gradient = this.svg.gradient("linear", (add: any) => {});
        }
        this.wave(
          { x: 0, y: this.isFlipped ? endY : originY },
          { x: this.svgWidth, y: endY },
          gradient,
        );
      }
    },
  },
  data() {
    return {
      svg: {},
      svgHeight: null,
      svgWidth: null,
    };
  },
  mounted() {
    if (this.$refs.waves) {
      this.svg = SVG(this.$refs.waves);
      const { width, height } = this.svg.viewbox();
      this.svgWidth = width;
      this.svgHeight = height;
      this.generate();
    }
  },
  computed: {
    getWaveDim() {
      let dim = { min: 32, max: 64 };
      if (window.innerWidth < 896) dim = { min: 16, max: 32 };
      // console.log(dim);
      return dim;
    },
  },
};
</script>
