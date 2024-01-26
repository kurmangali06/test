import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: '/margarita',
    children: [
      {
        path: "/:cocktail",
        name: 'product',
        component: () => import("../pages/Product.vue"),
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../components/404.vue"),
  },
];