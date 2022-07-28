export default () => [
  {
    path: '/',
    name: 'Home',
    comp: '/',
    meta: {
      label: '首页',
      icon: 'home',
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'About',
    comp: '/',
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
            comp: '/sys',
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
                comp: '/sys',
                meta: {
                  label: '菜单1-2-1',
                  icon: 'star'
                }
              },
              {
                path: 'menu1-2-2',
                name: 'Menu122',
                comp: '/sys',
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
        comp: '',
        meta: {
          label: '菜单2',
          icon: 'star'
        }
      },
      {
        path: 'menu3',
        name: 'Menu3',
        meta: {
          label: '菜单3',
          icon: 'star'
        }
      },
      {
        path: 'menu4',
        name: 'Menu4',
        meta: {
          label: '菜单4',
          icon: 'star'
        }
      },
      {
        path: 'menu5',
        name: 'Menu5',
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
  },
  {
    path: '/twoPackaging',
    name: 'TwoPackaging',
    // comp: () => import('../views/TwoPackaging.vue'),
    comp: '/',
    meta: {
      label: '二次封装',
      icon: 'star'
    }
  },
  {
    path: '/slots',
    name: 'Slots',
    // comp: () => import('../views/Slots.vue'),
    comp: '/',
    meta: {
      label: '插槽',
      icon: 'star'
    }
  }
]
