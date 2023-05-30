export default [
  {
    path: '/personal/account',
    name: 'Account',
    component: () => import('@/views/personal/Account.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Account',
      category: 'Personal'
    }
  },
  {
    path: '/personal/todo',
    name: 'To Do',
    component: () => import('@/views/personal/ToDo.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'To Do',
      category: 'Personal'
    }
  },
  {
    path: '/personal/unsplash',
    name: 'Unsplash',
    component: () => import('@/views/personal/Unsplash.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Unsplash',
      category: 'Personal'
    }
  }
]
