import { Page } from "@/Pages/Page";

import ConvexFlyer from "@/Pages/Convex/Flyer/Flyer.vue";
import ConvexPools from "@/Pages/Convex/Pools/Pools.vue";
import ConvexRevenue from "@/Pages/Convex/Revenue/Revenue.vue";

export const pageConvex: Page = {
  title: "Convex",
  titleRoute: "/convex",
  visible: true,
  planeX: 255,
  routes: [
    { path: "/convex", redirect: { name: "flyer" } },
    { path: "/convex/flyer", name: "flyer", component: ConvexFlyer },
    {
      path: "/convex/pools/:pool?",
      name: "convexpools",
      component: ConvexPools,
    },
    {
      path: "/convex/revenue",
      name: "convexrevenue",
      component: ConvexRevenue,
    },
  ],
  menuHeader: "headers/convex.png",
  menuItems: [
    {
      to: "/convex/flyer",
      icon: "fas fa-plane",
      label: "Flyer",
    },
    {
      to: "/convex/pools",
      icon: "fas fa-chart-pie",
      label: "Pools",
    },
    {
      to: "/convex/revenue",
      icon: "fa fa-usd",
      label: "Revenue",
    },
  ],
};
