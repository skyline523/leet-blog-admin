import { createFetch } from '@vueuse/core'

import router from '@/router'
import pinia from '@/store'
import { useUserStore } from '@/store/user'
import { useSnackbarStore } from '@/store/snackbar'

const snackbarStore = useSnackbarStore(pinia)

const useRequest = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  options: {
    immediate: true,
    timeout: 10000,
    beforeFetch({ options }) {
      const userStore = useUserStore()
      const token = userStore.token || ''

      options.headers.Authorization = token

      return { options }
    },
    afterFetch({ data, response }) {
      const userStore = useUserStore()
      console.log(data, response)
      if (response.status === 200) {
        if (data.code >= 400 && data.code <= 500) {
          if (data.code === 401) {
            userStore.resetState()
            sessionStorage.clear()
            router.replace('/auth/signin')
          }
          snackbarStore.open({
            content: data.message,
            color: 'red'
          })
        }
      }
      return { data, response }
    },
    onFetchError({ data, error }) {
      if (error.message) {
        snackbarStore.open({
          content: '请求出错',
          color: 'red'
        })
        console.log(error)
      }

      return { data, error }
    }
  },
  fetchOptions: {
    mode: 'no-cors',
    credentials: 'include'
  }
})

export { useRequest }
