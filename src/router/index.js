import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import KlassensHund from '../views/KlassensHund.vue'
=======
import Klasse from '../views/Klasse.vue'
import IndeUde from '../views/IndeUde.vue'
import StrandBjerg from '../views/StrandBjerg.vue'
import TimeFrikvarter from '../views/TimeFrikvarter.vue'
import MangeFå from '../views/MangeFå.vue'
import FindHund from '../views/FindHund.vue'
>>>>>>> parent of e0dc890 (Cleaning Code)
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
<<<<<<< HEAD
    path: '/KlassensHund',
    name: 'KlassensHund',
    component: KlassensHund
=======
    path: '/Klasse',
    name: 'Klasse',
    component: Klasse
  },
  {
    path: '/IndeUde',
    name: 'IndeUde',
    component: IndeUde
>>>>>>> parent of e0dc890 (Cleaning Code)
  },
  {
    path: '/StrandBjerg',
    name: 'StrandBjerg',
    component: StrandBjerg
  },
  {
    path: '/TimeFrikvarter',
    name: 'TimeFrikvarter',
    component: TimeFrikvarter
  },
  {
    path: '/MangeFå',
    name: 'MangeFå',
    component: MangeFå
  },
  {
    path: '/FindHund',
    name: 'FindHund',
    component: FindHund
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
