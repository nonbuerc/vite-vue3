import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

import { defStore } from '../store/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  //设置404页面
  if (set404(to, next)) return

  //设置navMenus
  setNavMenus(to)

  //设置KeepAlive
  setKeepAlive(to)

  next()
})

const setNavMenus = (to) => {
  if (!defStore().navMenus.some((r) => r.name === to.name) && to.name !== 'Home')
    defStore().$patch(
      (state) =>
        (state.navMenus = [
          ...state.navMenus,
          {
            label: to.meta.label,
            name: to.name
          }
        ])
    )
}

//设置404页面
const set404 = (to, next) => {
  if (!router.hasRoute(to.name)) {
    let index = to.fullPath.lastIndexOf('/')
    let path = to.fullPath.slice(0, index)
    router.addRoute({
      path: path + '/404',
      name: '404',
      component: () => import('../views/404.vue')
    })
    next({ name: '404' })
    return true
  }
  return false
}
//设置KeepAlive
const setKeepAlive = (to) => {
  //name要和组件名一致
  if (to.meta.keepAlive && !defStore().include.includes(to.name)) {
    defStore().$patch((state) => (state.include = [...state.include, to.name]))
  }
  if (!to.meta.keepAlive && !defStore().exclude.includes(to.name)) {
    defStore().$patch((state) => (state.exclude = [...state.exclude, to.name]))
  }
}
export default router
