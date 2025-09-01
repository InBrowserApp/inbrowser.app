import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'jwt-decoder-verifier',
    path: '/tools/jwt-decoder-verifier',
    component: () => import('./JWTDecoderVerifierView.vue'),
  },
]
