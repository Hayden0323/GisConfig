import Vue from 'vue'
import Vuex from 'vuex'
import snack from './modules/snack'
import map from './modules/map'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snack,
    map,
  },
})
