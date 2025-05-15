import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supportedLanguages } from '@/locale'

export const routesWithoutI18n: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

export const routes = routesWithoutI18n.map((route) => ({
  ...route,
  alias: supportedLanguages.map((lang) => '/' + lang + route.path),
}))
