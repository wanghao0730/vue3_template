import { App } from 'vue'
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
// 导入动态路由
import routerLayouts from './autoload'

//导入routes
import routes from './routes'

const router = createRouter({
  //将其解构放入
  routes: [...routes, ...routerLayouts],
  history: createWebHistory()
})
//在这里完成app的挂载router
export function useRouter(app: App) {
  //完成挂载
  app.use(router)
}

export default router
