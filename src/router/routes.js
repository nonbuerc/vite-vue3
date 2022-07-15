const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      label: '首页',
      icon: 'home',
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      label: '关于',
      icon: 'star'
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      label: '菜单',
      icon: 'star'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        meta: {
          label: '菜单1',
          icon: 'star'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11',
            component: () => import('../views/sys/Menu11.vue'),
            meta: {
              label: '菜单1-1',
              icon: 'star'
            }
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            meta: {
              label: '菜单1-2',
              icon: 'star'
            },
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu121',
                component: () => import('../views/sys/Menu121.vue'),
                meta: {
                  label: '菜单1-2-1',
                  icon: 'star'
                }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu122',
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
        name: 'Menu2',
        // component: () => import('../views/Home.vue'),
        meta: {
          label: '菜单2',
          icon: 'star'
        }
      },
      {
        path: 'menu3',
        name: 'Menu3',
        // component: () => import('../views/Home.vue'),
        meta: {
          label: '菜单3',
          icon: 'star'
        }
      },
      {
        path: 'menu4',
        name: 'Menu4',
        // component: () => import('../views/Home.vue'),
        meta: {
          label: '菜单4',
          icon: 'star'
        }
      },
      {
        path: 'menu5',
        name: 'Menu5',
        // component: () => import('../views/Home.vue'),
        meta: {
          label: '菜单5',
          icon: 'star'
        }
      }
    ]
  },
  {
    path: '/view',
    name: 'View',
    meta: {
      label: '视图',
      icon: 'star'
    },
    children: [
      {
        path: '/view1',
        name: 'View1',
        meta: {
          label: '视图1',
          icon: 'star'
        }
      },
      {
        path: '/view2',
        name: 'View2',
        meta: {
          label: '视图2',
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
