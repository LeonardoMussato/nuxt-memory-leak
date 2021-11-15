<template>
  <column :crossAxisAlignment="`center`" :gap="`1em`" v-if="currentProduct">
    <h1>{{ currentProduct.title }}</h1>
    <span>{{ currentProduct.description }}</span>
    <padding v-if="hasAtLeastOneLink" :paddingValue="`1em`">
      <row :mainAxisAlignment="`center`" :gap="`1em`">
        <branded-app-button
          v-if="currentProduct.appStoreLink"
          :alt="currentProduct.title"
          :onClick="() => goToStore(currentProduct.appStoreLink)"
        />
        <branded-app-button
          v-if="currentProduct.googlePlayLink"
          :alt="currentProduct.title"
          :onClick="() => goToStore(currentProduct.googlePlayLink)"
          :imagePath="`./app-icons/google-play.svg`"
        />
        <generic-image-app-button
          v-if="currentProduct.externalUrl"
          :alt="currentProduct.title"
          :imagePath="currentProduct.icon"
          :description="currentProduct.title"
          :onClick="() => goToStore(currentProduct.externalUrl)"
          :title="'Watch it on'"
        />
      </row>
    </padding>
    <h2 v-if="currentProduct.features?.length > 0">Features</h2>
    <main-description
      v-for*="(feature, index) in currentProduct.features"
      :title="feature.title"
      :text="feature.description"
      :isLeft="index % 2 != 0"
      :key="index"
    >
      <template v-slot:image>
        <asset-image :assetImagePath="feature.image" />
      </template>
    </main-description>
  </column>
</template>
<script lang="ts">
import Product from "../../../models/product";
import { getProducts } from "../../../composables/data";
export default {
  name: "ProductDetailPage",
  head() {
    return {
      title: `Italians Code It Better - ${this.currentProduct.title} - Detail Page`,
      meta: [
        {
          name: "description",
          content: `${this.currentProduct.description}`,
        },
      ],
    };
  },
  data() {
    return {
      currentProduct: null,
    };
  },
  beforeMount() {
    const routingName = this.$route.params.routingName;
    const currentProduct: Product | null = this.products.find(
      (prod: Product) => {
        if (prod.routingName === routingName && prod.visible) {
          return true;
        } else {
          return false;
        }
      },
    );
    if (!currentProduct) {
      this.$router.push({ path: "/" });
    } else {
      this.currentProduct = currentProduct;
    }
  },
  computed: {
    hasAtLeastOneLink() {
      const { appStoreLink, googlePlayLink, externalUrl } = this
        .currentProduct as Product;
      if (appStoreLink || googlePlayLink || externalUrl) {
        return true;
      }
      return false;
    },
  },
  methods: {
    goToStore(storeUrl: string) {
      location.href = storeUrl;
    },
  },
  setup() {
    return {
      products: getProducts,
    };
  },
};
</script>
