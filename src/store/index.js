import Vue from 'vue'
import Vuex from 'vuex'
import snack from './modules/snack'
import map from './modules/map'
import location from './modules/location'
import platform from './modules/platform'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snack,
    map,
    location,
    platform,
  },
})
