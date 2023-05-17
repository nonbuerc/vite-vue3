export const businessRoutes = (path: string): any => [
  {
    path: '/control',
    name: 'Control',
    component: `${path}/Control`,
    meta: {
      label: '控制台',
      icon: 'home',
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: `${path}/About`,
    meta: {
      label: '关于',
      icon: 'star',
      keepAlive: true
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      label: '菜单',
      icon: 'star'
    },
    redirect: {
      name: 'Menu3'
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
            component: `${path}/sys/Menu11`,
            meta: {
              label: '菜单1-1',
              icon: 'star'
            }
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            meta: {
              label: '菜单1-2',
              icon: 'star'
            },
            component: `${path}/sys/Menu12`,
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu121',
                component: `${path}/sys/Menu121`,
                meta: {
                  label: '菜单1-2-1',
                  icon: 'star'
                }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu122',
                component: `${path}/sys/Menu122`,
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
        component: '',
        meta: {
          label: '菜单2',
          icon: 'star'
        }
      },
      {
        path: 'menu3',
        name: 'Menu3',
        component: '',
        meta: {
          label: '菜单3',
          icon: 'star'
        }
      },
      {
        path: 'menu4',
        name: 'Menu4',
        component: '',
        meta: {
          label: '菜单4',
          icon: 'star'
        }
      },
      {
        path: 'menu5',
        name: 'Menu5',
        component: '',
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
        path: 'view1',
        name: 'View1',
        meta: {
          label: '视图1',
          icon: 'star'
        }
      },
      {
        path: 'view2',
        name: 'View2',
        meta: {
          label: '视图2',
          icon: 'star'
        }
      }
    ]
  },
  {
    path: '/twoPackaging',
    name: 'TwoPackaging',
    component: `${path}/TwoPackaging`,
    meta: {
      label: '二次封装',
      icon: 'star'
    }
  },
  {
    path: '/slots',
    name: 'Slots',
    component: `${path}/Slots`,
    meta: {
      label: '插槽',
      icon: 'star'
    }
  }
]

export const dataRoutes = (path: string): any => [
  {
    path: '/user',
    name: 'User',
    component: `${path}/user`,
    meta: {
      label: '用户列表',
      icon: 'home'
    }
  }
]
export const systemRoutes = (path: string): any => [
  {
    path: '/setting',
    name: 'Setting',
    component: `${path}/setting`,
    meta: {
      label: '系统设置',
      icon: 'home'
    }
  }
]
export const mainRoutes = (path: string): any => [
  {
    path: '/setting',
    name: 'Setting',
    component: `${path}/setting`,
    meta: {
      label: '系统设置',
      icon: 'home'
    }
  }
]

export default (): any => [
  {
    path: '/',
    name: 'Business',
    component: '/Main',
    meta: {
      label: 'Main',
      icon: 'account_balance'
    },
    redirect: {
      name: 'Control'
    },
    children: [...businessRoutes('/business')]
  },
  {
    path: '/data',
    name: 'Data',
    component: '/Main',
    meta: {
      label: 'Main',
      icon: 'dashboard'
    },
    redirect: {
      name: 'Control'
    },
    children: [...dataRoutes('/data')]
  },
  {
    path: '/system',
    name: 'System',
    component: '/Main',
    meta: {
      label: 'Main',
      icon: 'spa'
    },
    redirect: {
      name: 'Control'
    },
    children: [...systemRoutes('/system')]
  }
]
