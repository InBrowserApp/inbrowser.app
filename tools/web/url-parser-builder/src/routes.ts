import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'url-parser-builder',
    path: '/tools/url-parser-builder',
    component: () => import('./URLParserBuilderView.vue'),
  },
]
