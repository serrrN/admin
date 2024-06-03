import { createRouter } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
  },
]
