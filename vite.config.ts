import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    quasar({
      sassVariables: 'src/assets/css/var.sass'
    })
  ],

  server: {
    https: false,
    host: '0.0.0.0',
    port: 3690
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:64368',
    //         changeOrigin: true,
    //         secure: false,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
