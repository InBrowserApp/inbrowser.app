import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-v4-generator',
  meta,
  routes: [
    {
      name: 'uuid-v4-generator',
      path: '/tools/uuid-v4-generator',
      component: () => import('./UUIDV4GeneratorView.vue'),
    },
  ],
  tags: ['uuid'],
  features: ['offline'],
}
