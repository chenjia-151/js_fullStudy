import Vue from 'vue'
import VueRouter from 'vue-router'
import Count from '@/components/Count'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Count
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
