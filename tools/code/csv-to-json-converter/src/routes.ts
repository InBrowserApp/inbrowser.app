import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'csv-to-json-converter',
    path: '/tools/csv-to-json-converter',
    component: () => import('./CsvToJsonConverterView.vue'),
  },
]

export default routes
