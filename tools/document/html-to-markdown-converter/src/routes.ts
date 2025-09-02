import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'html-to-markdown-converter',
    path: '/tools/html-to-markdown-converter',
    component: () => import('./HtmlToMarkdownConverterView.vue'),
  },
]

export default routes
