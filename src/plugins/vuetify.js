// Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    // default - only for display purposes
    iconfont: 'md',
  },
}

export default new Vuetify(opts)
