import { setupMockPlugin } from './mockjs'
import vue from '@vitejs/plugin-vue'

export default function setupPlugins(
  isBuild: boolean,
  eny: Record<string, any>
) {
  const plugins = [vue()]

  plugins.push(setupMockPlugin(isBuild))
  return plugins
}
