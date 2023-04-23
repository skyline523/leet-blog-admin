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
