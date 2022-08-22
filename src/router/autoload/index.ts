/**
 * 根据配置项来判断
 */
import { RouteRecordRaw } from 'vue-router'
import { env } from '@/utils'
import getRouters from './view' //获取自动生成路由的方法(是否使用本地文件)
import autoloadModuleRoutes from './module' //根据用户配置进行自动加载

let routes = [] as RouteRecordRaw[]

//表示使用本地文件自动生成路由 VITE_AUTOLOAD_ROUTER
if (env.VITE_AUTOLOAD_ROUTER) {
  routes = getRouters()
} else {
  //加载用户的自动配置路由
  routes = autoloadModuleRoutes()
}

export default routes
