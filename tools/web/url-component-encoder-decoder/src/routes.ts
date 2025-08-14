import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    name: 'url-component-encoder-decoder',
    path: '/tools/url-component-encoder-decoder',
    component: () => import('./URLComponentEncoderDecoderView.vue'),
  },
]
