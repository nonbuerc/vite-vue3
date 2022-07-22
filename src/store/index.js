import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const defStore = defineStore('def', {
  persist: {
    storage: window.sessionStorage,
    paths: ['config', 'navMenus']
  },
  // other options...
  state: () => ({
    config: {
      view: 'lhr lpr lfr', //布局
      theme: false, //主题
      primary: '#55b5ad', //主题色
      swapMenuAndSetting: true, //交换菜单设置位置
      showMenu: true, //是否需要菜单
      menuPosition: 'All', //需要菜单位置
      drawerMenu: true, //是否显示左侧菜单
      miniDrawerMenu: false,
      showDrawerSetting: true, //是否需要设置
      drawerSetting: true, //是否显示左侧菜单
      isReveal: true,
      headerInset: true,
      navMenus: true,
      breadcrumbs: true,
      footer: true
    },
    include: [], //需要缓存的页面
    exclude: [], //不需要缓存的页面
    navMenus: [
      {
        label: '首页',
        name: 'Home'
      }
    ],
    selMenu: [],
    refreshView: true, //刷新当前页面
    resize: {} //监听窗口大小
  }),
  getters: {},
  actions: {}
})
