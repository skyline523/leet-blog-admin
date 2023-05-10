export default [
  {
    path: '/chatGPT/v1',
    name: 'Chatbot',
    component: () => import('@/views/chatgpt/chatbot.vue'),
    meta: {
      isAuth: true,
      layout: 'default',
      title: 'Chatbot',
      category: 'ChatGPT'
    }
  }
]
