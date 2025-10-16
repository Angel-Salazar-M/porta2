import { createRouter, createWebHistory } from 'vue-router'
import pantallaPrincipal from '../views/pantallaPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: pantallaPrincipal
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/pantallaPrincipal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router