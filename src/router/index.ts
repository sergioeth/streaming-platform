import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import Login from "../views/login.vue";
import Home from "../views/home.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
