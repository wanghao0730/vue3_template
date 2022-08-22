import { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//导出elementplus加载的函数
export function setupEelemntPlus(app: App) {
  app.use(ElementPlus)
}
