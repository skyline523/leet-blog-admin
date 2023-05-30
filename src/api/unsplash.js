import { createFetch } from '@vueuse/core'
import { useSnackbarStore } from '@/store/snackbar'

const snackbarStore = useSnackbarStore()

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const useUnsplashApi = createFetch({
  baseUrl: 'https://api.unsplash.com',
  options: {
    immediate: true,
    timeout: 10000,
    beforeFetch({ options }) {
      options.headers.Authorization = `Client-ID ${ACCESS_KEY}`

      return { options }
    },
    afterFetch({ data, response }) {
      if (response.status !== 200) {
        snackbarStore.open({
          content: data.message,
          color: 'red'
        })
      }
      return { data, response }
    },
    onFetchError({ data, error }) {
      console.log(error)
      snackbarStore.open({
        content: error,
        color: 'red'
      })

      return { data, error }
    }
  }
})

// Get photo list
export const getPhotos = (pageIndex = 1, pageSize = 10, order = 'latest') => {
  return useUnsplashApi(
    `/photos?page=${pageIndex}&per_page=${pageSize}&order_by=${order}`
  ).json()
}

// Get collection list
export const getCollection = (pageIndex = 1, pageSize = 10) => {
  return useUnsplashApi(`/photos?page=${pageIndex}&per_page=${pageSize}`).json()
}

// like photo
export const likePhoto = (id) => {
  return useUnsplashApi(`/photos/${id}/like`).post().json()
}

// unlike photo
export const unlikePhoto = (id) => {
  return useUnsplashApi(`/photos/${id}/like`).delete().json()
}
