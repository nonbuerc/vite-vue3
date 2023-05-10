import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/css/main.sass'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)

Object.values(import.meta.glob('/src/plugins/*.ts', { eager: true })).forEach((plugin: any) =>
  plugin.default?.(app)
)

app.mount('#app')
