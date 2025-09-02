import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'yaml-to-toml-converter',
    path: '/tools/yaml-to-toml-converter',
    component: () => import('./YamlToTomlConverterView.vue'),
  },
]

export default routes
