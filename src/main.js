import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router'
import store from '@/store'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
