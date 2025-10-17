import { createRouter, createWebHistory } from 'vue-router'
import categorias from '../views/categorias.vue'
import pPrincipal from '../views/pPrincipal.vue'

const routes = [
  {
    path: '/categorias',
    name: 'categorias',
    component: categorias
  },
  {
    path: '/home',
    name: 'home',
    component: pPrincipal
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router