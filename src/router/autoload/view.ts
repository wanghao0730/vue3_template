/**
 * 动态生成路由 根据.env环境下的VITE_AUTOLOAD_ROUTER值是否为true
 * 为true的情况通过加载本项目文件进行路由自动生成，为false 通过module模块中的数据进行生成路由
 */

import { RouteRecordRaw } from 'vue-router'
// import routes from './routes'
//该工具将env环境的值转换成对应的数据类型,如果默认从env取值所有参数值为string类型
import { env } from '@/utils'

//import.meta.globEager目前只支持相对路径查找
const layouts = import.meta.globEager('../../layout/*.vue')
// **表示可以遍历下面的子目录
const views = import.meta.globEager('../../views/**/*.vue')

console.log('查找到的本地路由', layouts)
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
    component: module.default,
    meta: module.default.route?.meta ?? {} //判断是否存在meta元素 不存在则返回空对象
  } as RouteRecordRaw
  return route
}

//返回 自动生成路由的函数给外界调用 用于判断是否自定义的生成还是项目文件的生成
export default getRouters
