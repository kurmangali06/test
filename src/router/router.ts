import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../components/404.vue"),
  },
  {
    path: "/",
    redirect: '/margarita',
  },
  {
    path: "/:cocktail",
    name: 'product',
    component: () => import("../pages/Product.vue"),
  },
];