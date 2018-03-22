import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'

import './styles/main.styl'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
