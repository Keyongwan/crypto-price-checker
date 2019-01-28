import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Vue2Filters from 'vue2-filters'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// import axios from "axios"

Vue.use(BootstrapVue)
Vue.use(Vue2Filters)
// Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
