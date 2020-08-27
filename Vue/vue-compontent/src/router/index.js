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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () => import('@/views/Methods.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('@/views/Watch.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
