export default [
  {
    path: '/auth/signin',
    name: 'Signin',
    component: () => import('@/views/auth/Signin.vue'),
    meta: {
      layout: 'auth',
      title: 'Signin'
    }
  }
]
