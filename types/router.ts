// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file, in which case you will need to add an export
// to ensure it is treated as a module
export {}

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    //访问的页面是否需要权限
    auth?: boolean
    //是否游客访问
    guest?: boolean
  }
}
