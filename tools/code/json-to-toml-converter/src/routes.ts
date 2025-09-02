import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'json-to-toml-converter',
    path: '/tools/json-to-toml-converter',
    component: () => import('./JsonToTomlConverterView.vue'),
  },
]

export default routes
