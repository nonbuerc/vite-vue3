const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      label: '首页',
      icon: 'home',
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      label: '关于',
      icon: 'star'
    }
  },
  {
    path: '/menu',
    name: 'menu',
    meta: {
      label: '菜单',
      icon: 'star'
    },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        meta: {
          label: '菜单1',
          icon: 'star'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'menu11',
            component: () => import('../views/sys/Menu11.vue'),
            meta: {
              label: '菜单1-1',
              icon: 'star'
            }
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            meta: {
              label: '菜单1-2',
              icon: 'star'
            },
            children: [
              {
                path: 'menu1-2-1',
                name: 'menu121',
                component: () => import('../views/sys/Menu121.vue'),
                meta: {
                  label: '菜单1-2-1',
                  icon: 'star'
                }
              },
              {
                path: 'menu1-2-2',
                name: 'menu122',
                component: () => import('../views/sys/Menu122.vue'),
                meta: {
                  label: '菜单1-2-2',
                  icon: 'star'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'menu2',
        name: 'menu2',
        // component: () => import('../views/Home.vue'),
        meta: {
          label: '菜单2',
          icon: 'star'
        }
      }
    ]
  }
]
const setRoutes = (routes = []) => {
  return routes.map((r) => {
    r = setRoute(r)
    if (r.children) {
      r = {
        component: () => import('../layout/BlankView.vue'),
        redirect: {
          name: r.children[0]?.name
        },
        ...r
      }
      r.children = [...setRoutes(r.children)]
    }
    return r
  })
}
const setRoute = (route) => {
  //缓存
  route = {
    ...route,
    meta: {
      //默认true
      keepAlive: true,
      ...route.meta
    }
  }
  //开发中
  if (!route.component && !route.children) {
    route = {
      component: () => import('../views/Developing.vue'),
      meta: {
        ...route.meta,
        keepAlive: false
      },
      ...route
    }
  }
  return route
}
export default setRoutes(routes)
