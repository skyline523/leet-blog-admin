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
    path: '/blog/tags',
    name: 'Tag',
    component: () => import('@/views/blog/Tag.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Tags',
      category: 'Blog'
    }
  },
  {
    path: '/blog/categories',
    name: 'Category',
    component: () => import('@/views/blog/Category.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Categories',
      category: 'Blog'
    }
  }
]
