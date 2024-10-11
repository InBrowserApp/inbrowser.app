import type { RouteRecordRaw } from 'vue-router'

import { messages as PDFHomeViewMessages } from './locales'
import { DocumentPdf16Regular } from '@vicons/fluent'

export const routes: RouteRecordRaw = {
  path: '/tools/pdf',
  name: 'tools-pdf',
  component: () => import('./PDFHomeView.vue'),
  meta: {
    locales: PDFHomeViewMessages,
    icon: DocumentPdf16Regular
  }
}
