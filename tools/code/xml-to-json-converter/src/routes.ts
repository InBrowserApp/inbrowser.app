import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'xml-to-json-converter',
    path: '/tools/xml-to-json-converter',
    component: () => import('./XmlToJsonConverterView.vue'),
  },
]

export default routes
