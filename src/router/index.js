import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import dayBookRouter from '../modules/daybook/router';
import authRouter from '../modules/auth/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */'../views/AboutView.vue')
    },
    {
      path: '/auth',
      ...authRouter
    },
    {
      path: '/daybook',
      ...dayBookRouter
    }
  ]
})

export default router
