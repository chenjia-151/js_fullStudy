import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/reset.styl'
import '../static/css/plugin.styl'
import Vant from 'vant';
import { Lazyload } from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

import { Toast } from '@/common/js/plugin'
Vue.use(Toast)
Vue.use(Vant)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
