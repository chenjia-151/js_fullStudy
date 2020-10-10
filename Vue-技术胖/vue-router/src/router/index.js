import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    components:{
      default:Hello,
      left: Hi1,
      right: Hi2
    }
  },
  {
    path: '/jack',
    name: 'Hello',
    components:{
      default:Hello,
      left: Hi2,
      right: Hi1
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
