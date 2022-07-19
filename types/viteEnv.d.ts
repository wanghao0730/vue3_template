// 类型声明文件需要在tsconfig.json中配置include扫这里

interface IEnvParams {
  VITE_DEV_API: string
  VITE_HOTS: boolean
  VITE_AUTOLOAD_ROUTERL: boolean
}

interface ImportMetaEnv extends IEnvParams {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
