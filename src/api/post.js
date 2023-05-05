import { useRequest } from '@/hooks/useRequest'

export const getCategorires = (params) => {
  return useRequest('/categories').get(params).json()
  // return instance.get('/categories', { params })
}

export const getCategory = (id) => {
  return useRequest(`/categories/${id}`).get().json()
  // return instance.get(`/categories/${id}`)
}

export const createCategory = (data) => {
  return useRequest('/categories').post(data).json()
  // return instance.post('/categories', data)
}

export const updateCategory = (id, data) => {
  return useRequest(`/categories/${id}`).patch(data).json()
  // return instance.patch(`/categories/${id}`, data)
}

export const deleteCategory = (id) => {
  return useRequest(`/categories/${id}`).delete().json()
  // return instance.delete(`/categories/${id}`)
}

export const getTags = (params) => {
  return useRequest('/tags').get(params).json()
  // return instance.get('/tags', { params })
}

export const getTag = (id) => {
  return useRequest(`/tags/${id}`).get().json()
  // return instance.get(`/tags/${id}`)
}

export const createTag = (data) => {
  return useRequest('/tags').post(data).json()
  // return instance.post('/tags', data)
}

export const updateTag = (id, data) => {
  return useRequest(`/tags/${id}`).patch(data).json()
  // return instance.patch(`/tags/${id}`, data)
}

export const deleteTag = (id) => {
  return useRequest(`/tags/${id}`).delete().json()
  // return instance.delete(`/tags/${id}`)
}
