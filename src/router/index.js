import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CriarSala from '../views/CriarSala.vue'
import Sala from '../views/Sala.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/criar',
    name: 'CriarSala',
    component: CriarSala
  },
  {
    path: '/sala',
    name: 'Sala',
    component: Sala
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
