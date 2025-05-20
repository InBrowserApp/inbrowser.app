import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-v1-v6-converter',
  meta,
  icon: Id,
  path: '/tools/uuid-v1-v6-converter',
  tags: ['uuid'],
  features: ['offline'],
} as const
