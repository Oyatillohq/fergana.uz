import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewsDetail from '@/views/NewsDetail.vue';
import Categryview from '@/views/CategryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news/:slug',
      name: 'news',
      component: NewsDetail,
    },
    {
      path: "/category/:slug/:id",
      name: "category",
      component: () => import("@/views/CategryView.vue")
    }

  ]
})

export default router
