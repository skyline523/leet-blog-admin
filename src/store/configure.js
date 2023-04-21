import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigureStore = defineStore('configure', {
  id: 'configure',
  state: () => ({
    theme: 'lightTheme',
    sidebarVisible: ref(true)
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['theme'] }]
  },
  actions: {
    setSidebarVisible(payload) {
      this.sidebarVisible = payload
    }
  }
})
