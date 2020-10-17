import Vue from 'vue'
import VueRouter from 'vue-router'

const search = () => import('@/views/search')
const rank = () => import('@/views/rank')
const recommend = () => import('@/views/recommend')
const singer = () => import('@/views/singer')

Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: recommend
  },
  {
    path: '/singer',
    name: 'singer',
    component: singer
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
