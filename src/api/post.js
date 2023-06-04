import { useRequest } from '@/hooks/useRequest'
import instance from '@/utils/request'

export const createPost = (data) => {
  return useRequest('/posts').post(data).json()
}

export const getCategorires = (data) => {
  return instance.post('/categories/getAll', data)
}

export const getCategory = (data) => {
  return instance.post('/categories/getOne', data)
}

export const createCategory = (data) => {
  return instance.post('/categories/create', data)
}

export const updateCategory = (data) => {
  return instance.post('/categories/update', data)
}

export const deleteCategory = (data) => {
  return instance.post('/categories/delete', data)
}

export const getTags = (data) => {
  return instance.post('/tags/getAll', data)
}

export const getTag = (data) => {
  return instance.post('/tags/getOne', data)
}

export const createTag = (data) => {
  return instance.post('/tags/create', data)
}

export const updateTag = (data) => {
  return instance.post('/tags/update', data)
}

export const deleteTag = (data) => {
  return instance.post('/tags/delete', data)
}
