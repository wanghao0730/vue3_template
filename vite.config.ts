import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import setupPlugins from './vite/plugins'
import { parseEnv } from './vite/utils'
// import setupPlugins from './vite/plugin/'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   //配置路径别名
//   resolve: {
//     alias,
//   },
// });

//在这里可以直接导出个函数根据不同环境进行配置
// export declare interface ConfigEnv {
//   command: 'build' | 'serve';  当前命令是build还是serve方式
//   mode: string;  mode表示什么模式的开发
// }

// 注意 Vite 默认是不加载 .env 文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个，可以使用 Vite 导出的 loadEnv 函数来加载指定的 .env 文件
export default ({ command, mode }: ConfigEnv) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const build = command === 'build'
  const cwd = process.cwd()
  const env = parseEnv(loadEnv(mode, cwd))
  console.log('查看mode', mode)
  return {
    plugins: setupPlugins(build, env),
    //配置路径别名
    resolve: {
      alias
    }
  }
}
