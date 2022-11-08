import { createRouter, createWebHashHistory } from 'vue-router'
import authMiddleware from '@/app/middleware/auth'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: authMiddleware,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
