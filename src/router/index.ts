import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { routes as toolsRoutes } from '../tools/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: () => import('../views/TagView.vue')
    },
    ...toolsRoutes
  ]
})

export default router
