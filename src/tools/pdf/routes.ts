import type { RouteRecordRaw } from 'vue-router'
import { messages as PDFHomeViewMessages } from './locales/PDFHomeView.vue.locales'
import { messages as RemoveOwnerPasswordViewMessages } from './locales/RemoveOwnerPasswordView.vue.locales'
import { Key16Regular, DocumentPdf16Regular } from '@vicons/fluent'

const prefix = '/tools/pdf'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix,
    name: 'tools-pdf',
    component: () => import('./views/PDFHomeView.vue'),
    meta: {
      locales: PDFHomeViewMessages,
      icon: DocumentPdf16Regular
    }
  },
  {
    path: prefix + '/remove-owner-password',
    name: 'tools-pdf-remove-owner-password',
    component: () => import('./views/RemoveOwnerPasswordView.vue'),
    meta: {
      locales: RemoveOwnerPasswordViewMessages,
      icon: Key16Regular
    }
  }
]
