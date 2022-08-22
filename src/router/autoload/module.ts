/**
 * 该文件进行判断配置文件中的autoload是否为true 表示是否使用本项目文件自动生成路由
 * 为false将从module文件中自动生成用户配置的路由
 */
import { RouteRecordRaw } from 'vue-router'

export default function autoloadModuleRoutes() {
  const modules = import.meta.globEager('../module/**/*.ts')

  let routes: RouteRecordRaw[] = []

  //从default中取
  Object.keys(modules).forEach((keys) => {
    routes.push(modules[keys].default)
  })

  return routes
}
