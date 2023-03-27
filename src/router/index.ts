import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import { defStore } from '../store/index'

import { setRoutes } from './set-routes'
console.log(setRoutes(routes()))

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...setRoutes(routes())]
})
router.beforeEach((to, from, next) => {
    //设置404页面
    if (set404(to, next)) return

    next()
})

router.afterEach((to) => {
    //设置navMenus
    setNavMenus(to)

    //设置KeepAlive
    setKeepAlive(to)
})

const set404 = (to: any, next: any) => {
    if (!router.hasRoute(to.name)) {
        const index = to.fullPath.lastIndexOf('/')
        const path = to.fullPath.slice(0, index)
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

const setNavMenus = (to: any) => {
    if (!defStore().navMenus.some((r: any) => r.name === to.name) && to.name !== 'Home')
        defStore().$patch(
            (state: any) =>
                (state.navMenus = [
                    ...state.navMenus,
                    {
                        label: to.meta.label,
                        name: to.name
                    }
                ])
        )
}

const setKeepAlive = (to: any) => {
    //name要和组件名一致
    if (to.meta.keepAlive && !defStore().include.includes(to.name)) {
        defStore().$patch((state: any) => (state.include = [...state.include, to.name]))
    }
    if (!to.meta.keepAlive && !defStore().exclude.includes(to.name)) {
        defStore().$patch((state: any) => (state.exclude = [...state.exclude, to.name]))
    }
}
export default router
