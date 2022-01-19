import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CriarSala from '../views/CriarSala.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/criar',
    name: 'new',
    component: CriarSala
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
