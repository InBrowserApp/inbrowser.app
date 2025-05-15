import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supportedLanguages } from '@/locale'
import { tools } from '@/tools'

export const routesWithoutI18n: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('@/views/ToolsView.vue'),
  },
  ...tools.flatMap((tool) => tool.routes),
]

export const routes = routesWithoutI18n.map((route) => ({
  ...route,
  alias: supportedLanguages.map((lang) => '/' + lang + route.path),
}))
