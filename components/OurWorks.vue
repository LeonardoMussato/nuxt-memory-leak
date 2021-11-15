<template>
  <div class="our-works">
    <column :gap="'2em'" :crossAxisAlignment="'stretch'">
      <row :mainAxisAlignment="'center'" :isResponsive="false">
        <h1 class="section-title light-from-up">Our works</h1>
      </row>
      <grid-container :gap="'4em'">
        <product-container
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :routeName="product.routingName"
          :iconpath="product.icon"
          :visible="product.visible"
        ></product-container>
      </grid-container>
    </column>
  </div>
</template>
<script lang="ts">
import { getProducts } from "../composables/data";
export default {
  name: "OurWorksSection",
  setup() {
    return {
      products: getProducts,
    };
  },
};
</script>
<style lang="scss" scoped>
.our-works {
  width: 100%;
}
</style>
