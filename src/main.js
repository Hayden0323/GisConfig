import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import 'normalize.css'
import './assets/style/common.less'

Vue.config.productionTip = false

// 处理弹框msg信息
window.haoutil = window.haoutil || {}
window.haoutil.msg = function(msg) {
  //可为空，或vue弹出msg
}

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
