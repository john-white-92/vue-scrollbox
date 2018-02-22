import Vue from 'vue'
import App from './App.vue'
import VueScrollbox from '../src/VueScrollbox.vue'

Vue.component('vue-scrollbox', VueScrollbox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
