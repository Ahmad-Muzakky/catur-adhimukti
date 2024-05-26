import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GalleryView from "../views/GalleryView.vue";
import ClassView from "../views/ClassView.vue";
import AdminDashboardView from "../views/AdminDashboardView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/class",
    name: "class",
    component: ClassView,
  },
  {
    path: "/admin/",
    name: "adminDashboard",
    component: AdminDashboardView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
