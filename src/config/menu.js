import blogMenu from './menus/blog'
import chatMenu from './menus/chat'
import personalMenu from './menus/personal'

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
    text: '',
    items: [
      {
        name: 'Playground',
        link: '/playground',
        icon: 'mdi-semantic-web'
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
  },
  {
    text: 'Personal',
    items: personalMenu
  }
]
