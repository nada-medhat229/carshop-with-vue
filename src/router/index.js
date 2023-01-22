import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Category from "../views/CategoryPage.vue";
import Contact from "../views/ContactPage.vue";
import carDetails from "../components/carDetails.vue";
import EachCar from "../components/EachCar.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/view/Cars/:CarType",
    name: "EachCar",
    component: EachCar,
  },
  {
    path: "/view/Cars/:carName/:maxcarid",
    name: "carDetails",
    component: carDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "Errorpage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next();
});
export default router;
