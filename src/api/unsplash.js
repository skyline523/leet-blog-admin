import axios from 'axios'

import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

const baseURL = 'https://api.unsplash.com'
const config = {
  headers: {
    Authorization: userStore.unsplashToken
      ? `Bearer ${userStore.unsplashToken}`
      : `Client-ID ${ACCESS_KEY}`
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
export const getSearch = (pageIndex, pageSize, query) => {
  return axios.get(
    `${baseURL}/search?page=${pageIndex}&per_page=${pageSize}&query=${query}`,
    config
  )
}

// get user liked photos
export const getUserLikedPhotos = (pageIndex, pageSize) => {
  return axios.get(
    `${baseURL}/users/skyline523/likes?page=${pageIndex}&per_page=${pageSize}`,
    config
  )
}

// Like photo
export const likePhoto = (id) => {
  return axios.post(`${baseURL}/photos/${id}/like`, {}, config)
}

// Unlike photo
export const unlikePhoto = (id) => {
  return axios.delete(`${baseURL}/photos/${id}/like`, config)
}
