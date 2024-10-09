import type { RouteRecordRaw } from 'vue-router'
import { routes as uuidRoutes } from './uuid/routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    component: () => import('./views/ToolsHomeView.vue')
  },
  ...uuidRoutes
]
