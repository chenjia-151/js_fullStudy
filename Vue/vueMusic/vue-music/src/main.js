import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/reset.styl'
import '../static/css/plugin.styl'
import { Swipe, SwipeItem, Lazyload  } from 'vant'

Vue.config.productionTip = false

import { Toast } from '@/common/js/plugin'
Vue.use(Toast)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
