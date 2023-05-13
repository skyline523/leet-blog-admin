export default [
  {
    path: '/chatAI/v1',
    name: 'ChatGPT',
    component: () => import('@/views/chatAI/ChatGPT.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'ChatGPT',
      category: 'ChatAI'
    }
  }
]
