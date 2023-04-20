import { defineStore } from 'pinia'

import router from '@/router'
import { useSnackbarStore } from '@/store/snackbar'
import { login, getUserInfo } from '@/api/user'

const snackbarStore = useSnackbarStore()

export const useUserStore = defineStore('user', {
  id: 'user',
  state: () => ({
    token: undefined,
    userInfo: null,
    menus: [],
    sessionTimeout: false, // session过期时间
    lastUpdateTime: 0 // 最后请求时间
  }),
  getters: {
    getSessionTimeout(state) {
      return !!state.sessionTimeout
    },
    getLastUpdateTime(state) {
      return state.lastUpdateTime
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: sessionStorage, paths: ['userInfo', 'token'] }]
  },
  actions: {
    setToken(info) {
      this.token = info || ''
      // sessionStorage.setItem('TOKEN_KEY', info)
    },
    setUserInfo(info) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
    },
    setSessionTimeout(flag) {
      this.sessionTimeout = flag
    },
    resetState() {
      this.token = ''
      this.userInfo = null
      this.menus = []
      this.sessionTimeout = false
      sessionStorage.clear()
    },
    async login(payload) {
      const res = await login(payload)

      if (res.code === 200) {
        this.setToken(res.data.token)
        snackbarStore.open({
          content: '登录成功',
          color: 'blue'
        })

        // this.afterLoginAction(true);
        return Promise.resolve()
      }
    },
    async afterLoginAction() {
      if (!this.token) return null

      const res = await getUserInfo()

      if (res.code === 200) {
        this.setUserInfo(res.data)

        // 是否跳转：从登录页进入需要跳转；刷新页面不需要跳转
        // if (isGoto) {
        //   router.replace('/');
        // }
      }
    },
    logout() {
      router.replace('/auth/signin')
      this.resetState()
    }
  }
})
