export default [
  {
    path: '/blog/posts',
    name: 'Post',
    component: () => import('@/views/blog/Post.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Posts',
      category: 'Blog'
    }
  },
  {
    path: '/blog/posts/create',
    name: 'Create Post',
    component: () => import('@/views/blog/PostForm.vue'),
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
