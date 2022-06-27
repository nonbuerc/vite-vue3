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
      drawer: true,
      drawerRight: false,
      isReveal: true,
      headerInset: true,
      navMenus: true,
      breadcrumbs: true,
      footer: false
    },
    exclude: []
  }),
  getters: {},
  actions: {
    // changeSetting(data) {
    //   console.log(data)
    //   this.isShowSetting = data
    // }
  }
})
