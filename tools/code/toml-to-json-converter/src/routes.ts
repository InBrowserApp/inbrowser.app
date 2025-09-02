import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'toml-to-json-converter',
    path: '/tools/toml-to-json-converter',
    component: () => import('./TomlToJsonConverterView.vue'),
  },
]

export default routes
