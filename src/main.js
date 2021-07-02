import Vue from 'vue'
import App from './App.vue'
import essay from 'ui-essay-2021'
Vue.use(essay)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
