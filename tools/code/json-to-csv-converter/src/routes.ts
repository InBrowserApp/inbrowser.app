import type { ToolRoute } from '@shared/tools'
import { path } from './info'

export const routes: ToolRoute[] = [
  {
    name: 'json-to-csv-converter',
    path,
    component: () => import('./JsonToCsvConverterView.vue'),
  },
]
