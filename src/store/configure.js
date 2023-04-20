import { defineStore } from 'pinia'

export const useConfigureStore = defineStore('configure', {
  id: 'configure',
  state: () => ({
    theme: 'lightTheme'
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['theme'] }]
  }
})
