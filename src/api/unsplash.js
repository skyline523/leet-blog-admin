import axios from 'axios'

// import { useSnackbarStore } from '@/store/snackbar'

// const snackbarStore = useSnackbarStore()

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const baseURL = 'https://api.unsplash.com'
const config = {
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
}

// Get photo list
export const getPhotos = (pageIndex, pageSize, order) => {
  return axios.get(
    `${baseURL}/photos?page=${pageIndex}&per_page=${pageSize}&order_by=${order}`,
    config
  )
}

// Search list
export const getSearch = (pageIndex, pageSize, order, query) => {
  return axios.get(
    `${baseURL}/search?page=${pageIndex}&per_page=${pageSize}&order_by=${order}&query=${query}`,
    config
  )
}

// Get collection list
// export const getCollection = (pageIndex, pageSize) => {
//   return useUnsplashApi(`/photos?page=${pageIndex}&per_page=${pageSize}`).json()
// }

// Like photo
export const likePhoto = (id) => {
  return axios.post(`${baseURL}/photos/${id}/like`, {}, config)
}

// Unlike photo
export const unlikePhoto = (id) => {
  return axios.delete(`${baseURL}/photos/${id}/like`, config)
}
