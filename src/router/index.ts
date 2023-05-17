import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

import { defStore } from '../stores/index'

import { setRoutes } from './set-routes'
console.log(setRoutes(routes()))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...setRoutes(routes())]
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  //设置navMenus
  setNavMenus(to)

  //设置KeepAlive
  setKeepAlive(to)
  //设置404页面
  if (set404(to, next)) return

  next()
})

// router.afterEach((to) => {})

const set404 = (to: any, next: any) => {
  if (!router.hasRoute(to.name)) {
    const index = to.fullPath.lastIndexOf('/')
    const path = to.fullPath.slice(0, index)
    router.addRoute({
      path: path + '/404',
      name: '404',
      component: () => import('../layouts/404.vue')
    })
    next({ name: '404' })
    return true
  }
  return false
}

const setNavMenus = (to: any) => {
  if (!defStore().navMenus.some((r: any) => r.name === to.name)) {
    const { path, name, meta } = to
    defStore().$patch(
      (state: any) =>
        (state.navMenus = [
          ...state.navMenus,
          {
            path,
            name,
            meta
          }
        ])
    )
  }
}

const setKeepAlive = (to: any) => {
  //name要和组件名一致s
  if (to.meta.keepAlive && !defStore().include.includes(to.name)) {
    defStore().$patch((state: any) => (state.include = [...state.include, to.name]))
  }
  if (!to.meta.keepAlive && !defStore().exclude.includes(to.name)) {
    defStore().$patch((state: any) => (state.exclude = [...state.exclude, to.name]))
  }
}
export default router
