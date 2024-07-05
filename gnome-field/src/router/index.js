/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/field",
    name: "field",
    component: () => import("@/pages/Field.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  routes,
});

export default router;
