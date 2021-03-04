import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueXgPlayer from 'vue-xgplayer'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

Vue.use(VueXgPlayer, {
  enterLogo: {
    url: '/images/video-player-loading.png',
    width: 100,
    height: 40
  },
  playsinline: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
