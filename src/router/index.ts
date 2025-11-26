import { createRouter, createWebHashHistory } from 'vue-router'
import categorias from '../views/categorias.vue'
import Index from '../views/Index.vue'
import programacion from '../views/programacion.vue'
import Certificaciones from '../views/certificaciones.vue'
import idiomas from '../views/idiomas.vue'
import competencias from '../views/competencias.vue'
import diplomaJapones from '../views/diplomaJapones.vue'
import diplomaToeic from '../views/diplomaToeic.vue'
import diplomaFirstGlobal from '../views/diplomaFirstGlobal.vue'
import diplomaEsen from '../views/diplomaEsen.vue'
import python from '../views/python.vue'
import excel from '../views/excel.vue'
import svaihealth from '../views/svaihealth.vue'
import scriptGo2024 from '../views/scriptGo2024.vue'
import scriptGo2025 from '../views/scriptGo2025.vue'


const routes = [
  {
    path: '/categorias',
    name: 'categorias',
    component: categorias
  },

  {
    path: '/',
    name: 'principal',
    component: Index
  },

  {
    path: '/home',
    name: 'home',
    component: Index
  },

  {
    path: '/programacion',
    name: 'programacion',
    component: programacion
  },

  {
    path: '/idiomas',
    name: 'idiomas',
    component: idiomas
  },

  {
    path: '/certificaciones',
    name: 'certificaciones',
    component: Certificaciones
  },

  {
    path: '/competencias',
    name: 'competencias',
    component: competencias
  },

  {
    path: '/toeic',
    name: 'toeic',
    component: diplomaToeic
  },

  {
    path: '/japones',
    name: 'japones',
    component: diplomaJapones
  },

  {
    path: '/FIRSTGLOBAL',
    name: 'FIRSTGLOBAL',
    component: diplomaFirstGlobal
  },

  {
    path: '/ESEN',
    name: 'ESEN',
    component: diplomaEsen
  },

  {
    path: '/python',
    name: 'python',
    component: python
  },

  {
    path: '/excel',
    name: 'excel',
    component: excel
  },

  {
    path: '/svaihealth',
    name: 'svaihealth',
    component: svaihealth
  },

  {
    path: '/scriptgo2024',
    name: 'scriptgo2024l',
    component: scriptGo2024
  },

  {
    path: '/scriptgo2025',
    name: 'scriptgo2025',
    component: scriptGo2025
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router