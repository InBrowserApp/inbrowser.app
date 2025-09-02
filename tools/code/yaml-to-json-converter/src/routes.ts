import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'yaml-to-json-converter',
    path: '/tools/yaml-to-json-converter',
    component: () => import('./YamlToJsonConverterView.vue'),
  },
]

export default routes
