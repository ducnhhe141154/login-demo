import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeConfigs from './store'
import VueRouter from 'vue-router'
import routes  from './routers.js'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Vuex)
const router = new VueRouter({
  routes
})
const store = new Vuex.Store(storeConfigs)

new Vue({
  render: h => h(App),
  store,router
}).$mount('#app')
