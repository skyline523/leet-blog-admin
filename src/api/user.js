import instance from '@/utils/request'

export const login = (data) => {
  return instance.post('/auth/signin', data)
}

export const register = (data) => {
  return instance.post('/auth/signup', data)
}

export const getUserInfo = () => {
  return instance.post('/auth/userInfo')
}
