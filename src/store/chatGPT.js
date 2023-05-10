import { defineStore } from 'pinia'

export const useChatGPTStore = defineStore({
  id: 'chatGPT',
  state: () => ({
    apiKey: '',
    chatHistory: [],
    apiKeyDialog: false
  }),
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['chatHistory', 'apiKey'] }]
  },
  getters: {
    getChatHistory() {
      return this.chatHistory
    },
    // If you have set up an API key, please use your own key. If not, please use the one I provided.
    getApiKey: (state) => state.apiKey || import.meta.env.VITE_OPENAI_API_KEY
  },
  actions: {
    saveApiKey(key) {
      this.apiKey = key
    },
    addToHistory(payload) {
      this.chatHistory.push(payload)
    },
    clearHistory() {
      this.chatHistory = []
    },
    // 移除最后一条临时信息
    removeLatestMessage() {
      this.chatHistory.pop()
    }
  }
})
