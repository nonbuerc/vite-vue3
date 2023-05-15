// import { defineAsyncComponent } from 'vue'
const modules = import.meta.glob('../views/**/**/*.vue')

const setRoute = (route: any) => {
  route = {
    ...route,
    meta: {
      //缓存  //默认false
      keepAlive: false,
      ...route.meta
    }
  }
  if (route.children) {
    route = {
      ...route,
      component: route?.component
        ? modules[`../views${route?.component}.vue`]
        : () => import('../layouts/BlankView.vue'),
      redirect: {
        name: route.children[0]?.name
      }
    }
  }
  if (!route.children) {
    //开发中
    route = {
      ...route,
      component: route?.component
        ? modules[`../views${route?.component}.vue`]
        : () => import('../layouts/Developing.vue')
    }
  }
  return route
}
export const setRoutes = (routes = []) => {
  return routes.map((r: any) => {
    r = setRoute(r)
    if (r.children) {
      r.children = [...setRoutes(r.children)]
    }
    return r
  })
}
