import { App } from 'vue'
import { setupTailwind } from './tailwindcss' //加载tailwindcss
import { setupEelemntPlus } from './elementplus'
import _ from 'lodash'
//当前方法是一个出口
//这个方法用于注册所有的插件
export function setupPlugins(app: App) {
  loadComponent(app)
  setupTailwind()
  setupEelemntPlus(app)
}

//用于全局注册的方法
const cpm = import.meta.globEager('../components/form/**')
console.log(cpm)
function loadComponent(app: App) {
  for (let item in cpm) {
    const keys = item.split('/').pop()?.split('.').shift() as string
    app.component(keys, cpm[item].default)
  }
}
