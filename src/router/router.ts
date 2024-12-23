import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Clients",
      component: () => import("../pages/clients.vue"),
    },
    {
      path: "/:id",
      name: "ClientDetails",
      component: () => import("../pages/clientDetails.vue"),
    },
  ],
});

export default router;
