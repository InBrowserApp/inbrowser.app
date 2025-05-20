import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-v7-generator',
  meta,
  icon: Id,
  path: '/tools/uuid-v7-generator',
  tags: ['uuid'],
  features: ['offline'],
} as const
