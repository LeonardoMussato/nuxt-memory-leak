import Feature from "../models/feature";
import Product from "../models/product";
const state = ref({
  products: [
    new Product({
      id: "1",
      title: "Restaurant Demo",
      icon: "./IT/cdn_connected_globe_dots_earth.svg",
      externalUrl: "https://restaurant.italianscodeitbetter.com",
      description: "Sito di demo per ristoranti",
      routingName: "restaurant-demo",
      startedOn: new Date("2021-05-10"),
      features: [
        new Feature({
          title: "Cool feature",
          description: "yeah",
          image: "./IT/main_pc.svg",
        }),
        new Feature({
          title: "Cool feature",
          description: "yeah",
          image: "./IT/main_pc.svg",
        }),
        new Feature({
          title: "Cool feature",
          description: "yeah",
          image: "./IT/main_pc.svg",
        }),
      ],
      visible: false,
    }),
    new Product({
      id: "2",
      title: "Plan my day",
      icon: "./app-icons/plan-my-day.svg",
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.mussato.leonardo.planMyDay",
      description: "App per organizzarsi le giornate",
      routingName: "plan-my-day",
      startedOn: new Date("2020-10-10"),
      endedOn: new Date("2020-11-24"),
      visible: false,
    }),
    new Product({
      id: "3",
      title: "Events ON",
      icon: "./app-icons/eventson.svg",
      externalUrl: "https://appeventson.it/",
      description: "App di eventi",
      routingName: "eventson",
      startedOn: new Date("2019-03-10"),
      visible: false,
    }),
    new Product({
      id: "4",
      title: "Topless Beachwear",
      icon: "./app-icons/topless-beach-wear.svg",
      externalUrl: "https://www.toplessbeachwear.com/",
      description: "Sito di costumi da bagno",
      routingName: "topless-beachwear",
      startedOn: new Date("2019-03-10"),
      visible: false,
    }),
    new Product({
      id: "5",
      title: "Simone Bandini Buti",
      icon: "./app-icons/bandinibuti.svg",
      externalUrl: "https://www.bandinibuti.it/",
      description: "Sito di costumi da bagno",
      routingName: "sbb",
      startedOn: new Date("2019-03-10"),
      visible: false,
    }),
  ],
});

const getProducts = computed(() => state.value.products);

export { getProducts };
