import { RouteRecordRaw } from "vue-router";

export const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/modules/blog/views/BlogView.vue"),
  },
  {
    path: "/blog/post/:slug",
    name: "blog.post",
    props: true,
    component: () => import("@/modules/blog/views/PostView.vue"),
  },
];
