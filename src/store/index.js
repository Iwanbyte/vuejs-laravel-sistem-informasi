import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import alert from './alert'
import dialog from './dialog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    alert,
    dialog
  }
})
