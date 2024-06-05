const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/tagManage',
        component: () => import('@/views/tagManage/index.vue'),
      },
      {
        path: '/knowledgeManage',
        component: () => import('@/views/knowledgeManage/index.vue'),
      },
      {
        path: '/systemSetting',
        component: () => import('@/view'),
      },
    ],
  },
]

export default routes
