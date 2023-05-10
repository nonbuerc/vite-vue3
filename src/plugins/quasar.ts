import type { App } from 'vue'
import {
  Quasar,
  AppFullscreen,
  LoadingBar
  // , Notify, LoadingBar, Dark
} from 'quasar'
import lang from 'quasar/lang/zh-CN'

// Import icon libraries  //https://www.mdui.org/docs/material_icon
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
// import 'quasar/dist/quasar.css'
import 'quasar/src/css/index.sass'

// A few examples for animations from Animate.css:
import '@quasar/extras/animate/fadeInLeft.css'
// import '@quasar/extras/animate/fadeOutRight.css'

export default (app: App) => {
  app.use(Quasar, {
    plugins: {
      AppFullscreen,
      LoadingBar
      /*Notify, LoadingBar, Dark*/
    },
    lang: lang
  })
}
