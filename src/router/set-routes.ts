// import { defineAsyncComponent } from 'vue'
const modules = import.meta.glob('../views/**/**/*.vue')
console.log(modules)

const setRoute = (route: any) => {
  if (route.children?.length) {
    route = {
      redirect: {
        name: route.children[0]?.name
      },
      ...route,
      component: route?.component
        ? modules[`../views${route?.component}.vue`]
        : () => import('../layouts/BlankView.vue')
    }
  }
  if (!route.children?.length) {
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
    if (r.children?.length) {
      r.children = [...setRoutes(r.children)]
    }
    return r
  })
}
