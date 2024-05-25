import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: "/store",
        name: "Store",
        component: ()=> import("../views/store.vue"),
        children:[
            {
                path:"",
                component: () => import("../views/nav/Recommend.vue"),
            },
            {
                path:"HotSeller",
                component: () => import("../views/nav/HotSeller.vue"),
            }
        ]
    }
  ]
})

export default router
