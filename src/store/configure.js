import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigureStore = defineStore('configure', {
  id: 'configure',
  state: () => ({
    theme: 'lightTheme',
    content: 'compact',
    sidebarVisible: ref(true)
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['theme', 'content'] }]
  },
  actions: {
    setSidebarVisible(payload) {
      this.sidebarVisible = payload
    }
  }
})
