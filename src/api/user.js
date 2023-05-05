import { useRequest } from '@/hooks/useRequest'

export const login = async (data) => {
  return await useRequest('/auth/signin').post(data).json()
}

export const register = async (data) => {
  return await useRequest('/auth/signup').post(data).json()
}

export const getUserInfo = async () => {
  return await useRequest('/auth/userInfo').json()
}
