import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'ip-cidr-normalizer',
    path: '/tools/ip-cidr-normalizer',
    component: () => import('./IPCIDRNormalizerView.vue'),
  },
] as const
