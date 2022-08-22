/**
 * 所有要自定义生成的路由可以在module这个文件写
 */
//RouteRecordRaw类型用于声明每个路由中的route值
import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layout/admin.vue'),
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue')
    }
  ]
} as RouteRecordRaw
