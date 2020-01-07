import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import base from './modules/base'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    base
  },
  getters
})

export default store
