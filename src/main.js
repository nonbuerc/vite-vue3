import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Quasar from './plugins/quasar'
import './assets/css/main.sass'

createApp(App).use(router).use(Quasar).mount('#app')
