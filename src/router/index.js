import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/o-nas',
    name: 'O nas',
    component: () => import('../views/About.vue')
  },
  {
    path: '/oferta',
    name: 'Oferta',
    component: () => import('../components/Offers.vue')
  },
  {
    path: '/oferta/:name',
    name: 'Detale',
    component: () => import('../components/OfferDetail.vue'),
  },
  {
    path: '/realizacje',
    name: 'Realizacje',
    component: () => import('../views/Realizations.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
