import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'toml-to-yaml-converter',
    path: '/tools/toml-to-yaml-converter',
    component: () => import('./TomlToYamlConverterView.vue'),
  },
]

export default routes
