import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { blogRoutes } from "./modules/blog/routes";

const routes: Array<RouteRecordRaw> = [
  ...blogRoutes,
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("@/modules/home/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/about/views/AboutView.vue"),
  },
  {
    path: "/careers",
    name: "careers",
    component: () => import("@/modules/careers/views/CareersView.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("@/modules/pricing/views/PricingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top when changing routes
    return { top: 0 };
  },
});

export default router;
