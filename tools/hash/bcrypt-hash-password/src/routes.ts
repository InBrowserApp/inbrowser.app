import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'bcrypt-hash-password',
    path: '/tools/bcrypt-hash-password',
    component: () => import('./BcryptHashPasswordView.vue'),
  },
] as const
