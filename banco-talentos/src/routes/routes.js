import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/about/About.vue'
import Home from '../views/Home/Home.vue'
import Talentos from '../views/Talentos/Talentos.vue'
import CadastrarTalento from '../views/Talentos/CadastrarTalento.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sobre',
      name: 'About',
      component: About
    },

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/talentos',
      name: Talentos,
      component: Talentos
    },

    {
      path: '/talentos/novo',
      name: CadastrarTalento,
      component: CadastrarTalento
    }
  ]
})

export default router
