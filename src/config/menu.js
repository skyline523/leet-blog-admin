import blogMenu from './menus/blog'
import chatMenu from './menus/chat'

export default [
  {
    text: '',
    items: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'mdi-view-dashboard-outline'
      }
    ]
  },
  {
    text: 'BLOG',
    items: blogMenu
  },
  {
    text: 'CHAT AI',
    items: chatMenu
  }
]
