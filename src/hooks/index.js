const setRoute = (route) => {
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
      component: () => import('../layouts/BlankView.vue'),
      redirect: {
        name: route.children[0]?.name
      },
      ...route
    }
  }
  //开发中
  if (!route.children) {
    route = {
      component: route?.comp
        ? () => import(`../views${route.comp}/${route.name}.vue`)
        : () => import(`../views/Developing.vue`),
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
  return routes.map((r) => {
    r = setRoute(r)
    if (r.children) {
      r.children = [...setRoutes(r.children)]
    }
    return r
  })
}
