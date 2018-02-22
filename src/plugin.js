import VueScrollbox from './VueScrollbox.vue'

const VueScrollboxPlugin = {
  install (Vue) {
    Vue.component('vue-scrollbox', VueScrollbox)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScrollboxPlugin)
}

export default VueScrollboxPlugin
