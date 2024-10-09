import type { RouteRecordRaw } from 'vue-router'

const prefix = '/tools/uuid'

export const routes: RouteRecordRaw[] = [
  {
    path: prefix,
    name: 'tools-uuid',
    component: () => import('./views/UUIDHomeView.vue')
  },
  {
    path: prefix + '/v1',
    name: 'tools-uuid-v1',
    component: () => import('./views/UUIDV1View.vue')
  },
  {
    path: prefix + '/v3',
    name: 'tools-uuid-v3',
    component: () => import('./views/UUIDV3View.vue')
  },
  {
    path: prefix + '/v4',
    name: 'tools-uuid-v4',
    component: () => import('./views/UUIDV4View.vue')
  },
  {
    path: prefix + '/v5',
    name: 'tools-uuid-v5',
    component: () => import('./views/UUIDV5View.vue')
  },
  {
    path: prefix + '/nil',
    name: 'tools-uuid-nil',
    component: () => import('./views/NilUUIDView.vue')
  },
  {
    path: prefix + '/bulk/v1',
    name: 'tools-uuid-bulk-v1',
    component: () => import('./views/BulkUUIDV1View.vue')
  },
  {
    path: prefix + '/bulk/v4',
    name: 'tools-uuid-bulk-v4',
    component: () => import('./views/BulkUUIDV4View.vue')
  },
  {
    path: prefix + '/decode',
    name: 'tools-uuid-decode',
    component: () => import('./views/UUIDDecodeView.vue')
  }
]
