import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
