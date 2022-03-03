import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import KlassensHund from '../views/KlassensHund.vue'
import Charles from '../views/dogs/Charles.vue'
import Bandit from '../views/dogs/Bandit.vue'
import Frida from '../views/dogs/Frida.vue'
import Kalle from '../views/dogs/Kalle.vue'
import Tessa from '../views/dogs/Tessa.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/KlassensHund',
    name: 'KlassensHund',
    component: KlassensHund
  },
  {
    path: '/dogs/Charles',
    name: 'Charles',
    component: Charles
  },
  {
    path: '/dogs/Bandit',
    name: 'Bandit',
    component: Bandit
  },
  {
    path: '/dogs/Frida',
    name: 'Frida',
    component: Frida
  },
  {
    path: '/dogs/Kalle',
    name: 'Kalle',
    component: Kalle
  },
  {
    path: '/dogs/Tessa',
    name: 'Tessa',
    component: Tessa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
