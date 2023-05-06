import { useRequest } from '@/hooks/useRequest'

export const createPost = (data) => {
  return useRequest('/posts').post(data).json()
}

export const getCategorires = (params) => {
  return useRequest('/categories').get(params).json()
}

export const getCategory = (id) => {
  return useRequest(`/categories/${id}`).get().json()
}

export const createCategory = (data) => {
  return useRequest('/categories').post(data).json()
}

export const updateCategory = (id, data) => {
  return useRequest(`/categories/${id}`).patch(data).json()
}

export const deleteCategory = (id) => {
  return useRequest(`/categories/${id}`).delete().json()
}

export const getTags = (params) => {
  return useRequest('/tags').get(params).json()
}

export const getTag = (id) => {
  return useRequest(`/tags/${id}`).get().json()
}

export const createTag = (data) => {
  return useRequest('/tags').post(data).json()
}

export const updateTag = (id, data) => {
  return useRequest(`/tags/${id}`).patch(data).json()
}

export const deleteTag = (id) => {
  return useRequest(`/tags/${id}`).delete().json()
}
