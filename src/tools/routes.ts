import type { RouteRecordRaw } from 'vue-router'
import { routes as uuidRoutes } from './uuid/routes'
import { routes as pdfRoutes } from './pdf/routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/tools',
    name: 'tools',
    component: () => import('./views/ToolsHomeView.vue')
  },
  ...uuidRoutes,
  ...pdfRoutes
]
