import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import router from './routers.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
