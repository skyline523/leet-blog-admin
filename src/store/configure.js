import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigureStore = defineStore('configure', {
  id: 'configure',
  state: () => ({
    theme: 'lightTheme', // darkMode
    content: 'compact', // wide
    navColor: 'evident', // blendIn, discrete
    sidebarVisible: ref(true)
  }),
  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ['theme', 'content', 'navColor'] }
    ]
  },
  actions: {
    setSidebarVisible(payload) {
      this.sidebarVisible = payload
    }
  }
})
