import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import getters from './getters.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user
  },
  getters
})

export default store
