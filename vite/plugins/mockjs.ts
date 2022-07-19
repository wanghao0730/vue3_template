import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled: !isBuild //判断是否为生产环境，生产环境不适用
  })
}
