import type { RouteRecordRaw } from 'vue-router'

const prefix = '/tools/pdf'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix,
    name: 'tools-pdf',
    component: () => import('./views/PDFHomeView.vue')
  },
  {
    path: prefix + '/remove-owner-password',
    name: 'tools-pdf-remove-owner-password',
    component: () => import('./views/RemoveOwnerPasswordView.vue')
  }
]
