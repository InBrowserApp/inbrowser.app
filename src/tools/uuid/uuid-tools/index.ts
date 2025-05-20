import type { ToolInfo } from '@/tools/interface'
import { meta } from './i18n'
import { Id } from '@vicons/carbon'

export const toolInfo: ToolInfo = {
  toolID: 'uuid-tools',
  meta,
  icon: Id,
  path: '/tools/uuid',
  tags: ['uuid'],
  features: ['offline'],
} as const
