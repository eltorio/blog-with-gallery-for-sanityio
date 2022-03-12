import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/styles/index.css";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/IndexPage.vue"),
  },
  {
    path: "/blog/:slug",
    component: () => import("@/views/SinglePost.vue"),
  },
];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  window.app = app;
  app.use(router);
  app.mount("#app");

