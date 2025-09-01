import type { ToolRoute } from '@shared/tools'

export const routes: ToolRoute[] = [
  {
    name: 'markdown-to-html-converter',
    path: '/tools/markdown-to-html-converter',
    component: () => import('./MarkdownToHtmlConverterView.vue'),
  },
]

export default routes
