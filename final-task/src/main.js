import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import moment from 'moment'

Vue.use(axios)
Vue.use(moment)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY')
  }
})