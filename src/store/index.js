import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const defStore = defineStore('def', {
  // other options...
  state: () => {
    return {
      isShowSetting: false
    }
  },
  getters: {
    // isShowSetting: (state) => state.isShowSetting
  },
  actions: {
    changeSetting(data) {
      console.log(data)
      this.isShowSetting = data
    }
  }
})
