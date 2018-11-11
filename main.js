// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from './axios/index'
import store from './store/index'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

Vue.use(YDUI)
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App)
})
