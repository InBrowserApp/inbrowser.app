import type { RouteRecordRaw } from 'vue-router'
import { messages } from './locales'
import { Icons20Regular } from '@vicons/fluent'

export const route: RouteRecordRaw = {
  path: '/tools/favicon/favicon-generator',
  name: 'tools-favicon-favicon-generator',
  component: () => import('./views/FaviconGeneratorView.vue'),
  meta: {
    locales: messages,
    icon: Icons20Regular
  }
}
