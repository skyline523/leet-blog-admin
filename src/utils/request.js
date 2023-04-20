import axios from 'axios'
import router from '@/router'

import pinia from '@/store'
import { useUserStore } from '@/store/user'
import { useSnackbarStore } from '@/store/snackbar'

const snackbarStore = useSnackbarStore(pinia)

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.token || ''

    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token
    }

    return config
  },
  (error) => {
    return Promise.error(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const userStore = useUserStore()
    const { status, data } = response
    if (status === 200) {
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
    return Promise.resolve(data)
  },
  (error) => {
    if (error.message) {
      snackbarStore.open({
        content: '请求出错',
        color: 'red'
      })
      console.log(error)
    }

    return Promise.reject(error)
  }
)

export default instance
