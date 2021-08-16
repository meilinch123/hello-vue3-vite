import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/list',
    meta: { title: '导航', icon: '', isNotMenu: true },
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '我的首页',
      icon: 'el-icon-menu',
    },
    component: () => import('views/home/index.vue'),
    children: [
      {
        name: 'List',
        component: () => import('views/home/list.vue'),
        path: 'list',
        meta: {
          title: '列表页',
          icon: 'el-icon-reading',
        },
      },
      {
        name: 'Detail',
        component: () => import('views/home/detail.vue'),
        path: 'detail',
        meta: {
          title: '详情页',
          icon: '',
          isNotMenu: true,
          parentName: 'List',
        },
      },
    ]
  },
  {
    path: '/example',
    name: 'Example',
    meta: {
      title: '示例',
      icon: 'el-icon-document',
    },
    component: () => import('views/example/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
