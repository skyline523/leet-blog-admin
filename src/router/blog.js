export default [
  {
    path: '/blog/posts',
    name: 'Posts',
    component: () => import('@/views/blog/Posts.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Posts',
      category: 'Blog'
    }
  },
  {
    path: '/blog/posts/:title',
    name: 'Post',
    component: () => import('@/views/blog/Post.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Post Detail',
      category: 'Blog'
    }
  },
  {
    path: '/blog/posts/create',
    name: 'Create Post',
    component: () => import('@/views/blog/PostCreate.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Create New Post',
      category: 'Blog'
    }
  },
  {
    path: '/blog/users',
    name: 'User',
    component: () => import('@/views/blog/User.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'User',
      category: 'Blog'
    }
  },
  {
    path: '/blog/archive',
    name: 'Archive',
    component: () => import('@/views/blog/Archive.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Archive',
      category: 'Blog'
    }
  }
]
