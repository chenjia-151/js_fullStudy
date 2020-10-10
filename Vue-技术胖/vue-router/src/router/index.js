import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
// import Hi1 from '@/components/Hi1'
// import Hi2 from '@/components/Hi2'
import Params from '@/components/params'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component:Hello
  },
  {
    path: '/params/:newsId/:newsTitle',
    component:Params
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
