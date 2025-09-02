import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'json-to-yaml-converter',
    path: '/tools/json-to-yaml-converter',
    component: () => import('./JsonToYamlBuilderView.vue'),
  },
]

export default routes
