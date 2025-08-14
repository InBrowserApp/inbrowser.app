import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'remove-pdf-owner-password',
    path: '/tools/remove-pdf-owner-password',
    component: () => import('./RemovePDFOwnerPasswordView.vue'),
  },
] as const
