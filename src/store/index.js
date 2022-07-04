import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const defStore = defineStore('def', {
  // other options...
  state: () => ({
    config: {
      view: 'lhr lpr lfr',
      theme: 'light',
      primary: '#55b5ad',
      swapMenuAndSetting: true,
      showDrawerMenu: true,
      drawerMenu: true,
      showDrawerSetting: true,
      drawerSetting: false,
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
        name: 'home'
      }
    ]
  }),
  getters: {},
  actions: {},
  persist: true
})
