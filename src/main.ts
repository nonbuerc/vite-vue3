import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/css/main.sass'

const app = createApp(App)

app.use(router).use(createPinia().use(piniaPluginPersistedstate))

Object.values(import.meta.glob('/src/plugins/*.ts', { eager: true })).forEach((plugin: any) => plugin.default?.(app))
app.mount('#app')
