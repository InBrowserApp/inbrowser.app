import type { RouteRecordRaw } from 'vue-router'
import { messages } from './locales'
import { Key16Regular } from '@vicons/fluent'

export const route: RouteRecordRaw = {
  path: '/tools/remove-pdf-owner-password',
  name: 'tools-remove-pdf-owner-password',
  component: () => import('./RemoveOwnerPasswordView.vue'),
  meta: {
    locales: messages,
    icon: Key16Regular,
    tags: ['pdf', 'password']
  }
}
