export default [
  {
    path: '/auth/signin',
    name: 'Signin',
    component: () => import('@/views/auth/Signin.vue'),
    meta: {
      layout: 'auth',
      title: 'Signin'
    }
  },
  {
    path: '/auth/unsplash',
    name: 'Unsplash OAuth',
    component: () => import('@/views/auth/UnsplashAuth.vue'),
    meta: {
      layout: 'redirect',
      title: 'Unsplash OAuth'
    }
  },
  {
    path: '/auth/unsplash-redirect',
    name: 'Unsplash OAuth Redirect',
    component: () => import('@/views/auth/UnsplashRedirect.vue'),
    meta: {
      layout: 'redirect',
      title: 'Unsplash OAuth Redirect'
    }
  }
]
