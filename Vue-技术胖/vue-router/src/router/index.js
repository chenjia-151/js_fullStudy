import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
// import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/params/:newsId/:newsTitle',
    component: Params
  },
  {
    path: '/goHome',
    redirect: '/' // 重定向
  },
  {
    path: '/goParams/:newsId/:newsTitle',
    redirect: '/params/:newsId/:newsTitle'  // 重定向带参数
  },
  {
    path: '/Hi1',
    component: Hi1,
    alias: '/jack'
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
