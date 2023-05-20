import { createRouter, createWebHashHistory } from 'vue-router'
import nProgress from 'nprogress'

import { useUserStore } from '@/store/user'
import authRoutes from './auth'
import blogRoutes from './blog'
import chatRoutes from './chat'
import personalRoutes from './personal'

import 'nprogress/nprogress.css'

nProgress.configure({
  showSpinner: false
})

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      isAuth: true,
      layout: 'home'
    }
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('@/views/playground/Playground.vue'),
    meta: {
      isAuth: true,
      layout: 'home'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/views/errors/NotFound.vue')
  },
  ...authRoutes,
  ...blogRoutes,
  ...chatRoutes,
  ...personalRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  nProgress.start()

  const userStore = useUserStore()
  const token = userStore.token

  if (token || to.name === 'Signin') {
    next()
  } else {
    userStore.resetState()
    next({ name: 'Signin' })
  }
})

router.afterEach(() => {
  nProgress.done()
})

export default router
