import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'bcrypt-hash-password-verifier',
    path: '/tools/bcrypt-hash-password-verifier',
    component: () => import('./BcryptHashPasswordVerifierView.vue'),
  },
] as const
