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
            path: "/tagManage",
            component:()=>import("@/views/tagManage")
        }
    ],
  },
]

export default routes
