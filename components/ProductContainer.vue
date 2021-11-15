<template>
  <column :crossAxisAlignment="'center'" :class="{ pointer: visible }">
    <div class="product-container" @click="visitProductPage">
      <div class="product-container__background">
        <squared-container>
          <cool-background :opacity="0.6"/>
        </squared-container>
      </div>
      <squared-container>
        <stack>
          <padding :paddingValue="'2em 2em 0 4em'">
            <column :crossAxisAlignment="'flex-end'" :gap="'1em'">
              <h2 style="text-align: right">
                {{ title }}
              </h2>
              <row :mainAxisAlignment="'flex-end'" :isResponsive="false">
                <app-icon>
                  <asset-image :assetImagePath="iconpath" />
                </app-icon>
              </row>
            </column>
          </padding>
          <row
            :mainAxisAlignment="'flex-start'"
            :crossAxisAlignment="'flex-end'"
            :isResponsive="false"
          >
            <squared-container :size="'70%'">
              <asset-image
                :assetImagePath="`./works/${routeName}/works.webp`"
                :alt="title"
                :imagePosition="'left'"
              />
            </squared-container>
          </row>
        </stack>
      </squared-container>
    </div>
  </column>
</template>
<script lang="ts">
export default {
  name: "ProductContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    iconpath: {
      type: String,
      required: true,
      default: `./IT/main_pc.svg`,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    visitProductPage() {
      if (this.visible) {
        this.$router.push({ path: `/work/${this.routeName}` });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/general.scss";
.product-container {
  position: relative;
  max-width: 100%;
  width: 360px;
  &__background {
    background-color: $dark-color;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 2em;
    overflow: hidden;
    max-width: 100%;
    width: 80%;
  }
  &__foreground {
    opacity: 1;
    padding: 2em;
    width: stretch;
    position: relative;
    height: 100%;
  }
}

.pointer {
  cursor: pointer;
}

h2 {
  line-height: 1.1em;
  font-size: 1.5em;
  text-shadow: 0px 0px 10px #000000, 0px 0px 20px #000000, 0px 0px 5px #000000;
}

@media (max-width: 600px) {
  .product-container {
    width: stretch;
    margin: 1em 2em;
    &__background {
      max-width: 80%;
    }
  }
}
@media (max-width: 768px) {
  .product-container {
    width: stretch;
    margin: 1em 2em;
    &__background {
      width: 80%;
    }
  }
}
</style>
