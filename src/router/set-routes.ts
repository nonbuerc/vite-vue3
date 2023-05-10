// import { defineAsyncComponent } from 'vue'
const modules = import.meta.glob('../views/**/**/*.vue')

const setRoute = (route: any) => {
  route = {
    ...route,
    meta: {
      //缓存  //默认true
      keepAlive: true,
      ...route.meta
    }
  }
  if (route.children) {
    route = {
      component: route?.compUrl
        ? modules[`../views${route?.compUrl}.vue`]
        : () => import('../layouts/BlankView.vue'),
      redirect: {
        name: route.children[0]?.name
      },
      ...route
    }
  }
  if (!route.children) {
    //开发中
    route = {
      component: route?.compUrl
        ? modules[`../views${route?.compUrl}.vue`]
        : () => import('../layouts/Developing.vue'),
      meta: {
        ...route.meta,
        keepAlive: false
      },
      ...route
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
