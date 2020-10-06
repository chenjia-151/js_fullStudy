import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Like from '@/views/Like.vue'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'

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
    component: Hi,
    children: [
      {
        path: '/',
        component: Hi
      },
      {
        path: 'hi1',
        component: Hi1
      },
      {
        path: 'hi2',
        component: Hi2
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
