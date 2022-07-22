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
      view: 'lhr lpr lfr',
      theme: false,
      primary: '#55b5ad',
      swapMenuAndSetting: true,
      showMenu: true,
      menuPosition: 'All',
      drawerMenu: true,
      showDrawerSetting: true,
      drawerSetting: true,
      isReveal: true,
      headerInset: true,
      navMenus: true,
      breadcrumbs: true,
      footer: true
    },
    include: [],
    exclude: [],
    navMenus: [
      {
        label: '首页',
        name: 'Home'
      }
    ],
    selMenu: [],
    refreshView: true,
    resize: {}
  }),
  getters: {},
  actions: {}
})
