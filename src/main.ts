import { createApp } from 'vue'
import App from './App.vue'

import router, { useRouter } from '@/router'
import { setupPlugins } from './plugins'

async function bootStarp() {
  const app = createApp(App)
  useRouter(app)
  setupPlugins(app)
  await router.isReady()
  app.mount('#app')
  
}

bootStarp()
