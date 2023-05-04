import instance from '@/utils/request'

export const getCategorires = (params) => {
  return instance.get('/categories', { params })
}

export const getCategory = (id) => {
  return instance.get(`/categories/${id}`)
}

export const createCategory = (data) => {
  return instance.post('/categories', data)
}

export const updateCategory = (id, data) => {
  return instance.patch(`/categories/${id}`, data)
}

export const deleteCategory = (id) => {
  return instance.delete(`/categories/${id}`)
}

export const getTags = (params) => {
  return instance.get('/tags', { params })
}

export const getTag = (id) => {
  return instance.get(`/tags/${id}`)
}

export const createTag = (data) => {
  return instance.post('/tags', data)
}

export const updateTag = (id, data) => {
  return instance.patch(`/tags/${id}`, data)
}

export const deleteTag = (id) => {
  return instance.delete(`/tags/${id}`)
}
