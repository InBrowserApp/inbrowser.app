import type { RouteRecordRaw } from 'vue-router'
import { messages } from './locales'
import { Icons20Regular } from '@vicons/fluent'

export const route: RouteRecordRaw = {
  path: '/tools/favicon',
  name: 'tools-favicon',
  component: () => import('./FaviconHomeView.vue'),
  meta: {
    locales: messages,
    icon: Icons20Regular
  }
}
