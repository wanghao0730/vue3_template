import { RouteRecordRaw } from 'vue-router'
//路由数组routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  }
]

export default routes
