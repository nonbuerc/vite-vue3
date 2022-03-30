import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'

import './assets/css/main.sass'

const app = createApp(App)

app.use(router).use(createPinia())
Object.values(import.meta.globEager('/src/plugins/*.js')).forEach((plugin) => plugin.default?.(app))
app.mount('#app')
