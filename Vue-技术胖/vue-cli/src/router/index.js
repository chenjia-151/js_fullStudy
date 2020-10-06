import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Like from '../views/Like.vue'
import Hi from '../views/Hi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/hi',
    name: 'Hi',
    component: Hi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
