import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'json-to-xml-converter',
    path: '/tools/json-to-xml-converter',
    component: () => import('./JsonToXmlConverterView.vue'),
  },
]

export default routes
