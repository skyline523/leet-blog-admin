import blogMenu from './menus/blog'

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
  }
]
