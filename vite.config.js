// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        quasar({
            sassVariables: 'src/assets/css/var.sass'
        })
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        }
    },
    // server: {
    //     https: false,
    //     port: 3690,
    //     proxy: {
    //         '/api': {
    //             target: '',
    //             changeOrigin: true,
    //             secure: false,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //         }
    //     }
    // },
    build: {}
})
