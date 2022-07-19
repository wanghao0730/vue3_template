/**
 * 生成动态路由
 */

import { RouteRecordRaw } from 'vue-router'
import routes from './routes'
import { env } from '@/types/helper'

const layouts = import.meta.globEager('../layout/*.vue')
// **表示可以遍历下面的子目录
const views = import.meta.globEager('../views/**/*.vue')

//类型断言
const routerLayouts = [] as RouteRecordRaw[]

function getRouters() {
  Object.entries(layouts).forEach(([file, module]) => {
    const routes = getRouteByModule(file, module)
    routes.children = getChildrenRoutes(routes)
    routerLayouts.push(routes)
  })
  return routerLayouts
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  return routes
}

//获取路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  // 截取字符串
  const name = file.replace(/.+layout\/|.+views\/|\.vue/gi, '')
  // 生成route对象
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw
  return route
}

//根据当前env环境中是否配置自动加载路由来调用方法
const isAutoloadRouters = env.VITE_AUTOLOAD_ROUTER
  ? getRouters()
  : ([] as RouteRecordRaw[])

console.log(isAutoloadRouters)
export default isAutoloadRouters
