import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import permission from './permission.js'
import getters from './getters.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: user,
    permission: permission
  },
  getters
})

export default store
