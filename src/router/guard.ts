/**
 * 路由导航守卫拦截
 */

import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  //记录token的值
  private token: any
  constructor(private router: Router) {}

  // 拦截方法
  public intercept() {
    //从本地缓存中获取token
    this.token = store.get('token')?.token
    console.log('当前获取的token', this.token)
    this.router.beforeEach((to, from) => {
      console.log('路由', to)
      //如果没有登录过就跳转登录界面
      if (this.hasAuth(to) === false) return '/auth/login' //直接返回登录界面
      //判断是否为游客登录
      if (this.isGuest(to) === false) return from //从哪里来返回哪里去
    })
  }
  //游客访问界面的情况下无法直接进入到后台
  public isGuest(to: RouteLocationNormalized): boolean {
    // 在login页面如果包含guest表示游客可以未登录的情况下访问(不包含token情况),已经登录过直接返回原来页面
    return Boolean(!to.meta?.guest || (to.meta.guest && !this.token))
  }

  //判断当前页面是否有直接访问权限
  public hasAuth(to: RouteLocationNormalized): boolean {
    // 判断当前用户所访问的路由是否需要权限 meta中取auth 如果auth为true表示需要权限，判断用户是否有token 无则返回false跳转登录界面
    return Boolean(!to.meta?.auth || (to.meta?.auth && this.token))
  }
}

/**
 * 函数接收Router对象
 */
export default (router: Router) => {
  new Guard(router).intercept()
}
