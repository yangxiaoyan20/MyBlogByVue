// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Map from './components/map'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import store from './store/index.js'
import router from './routes.js'

import axios from 'axios'
/* ��axios����ҵ�Vueʵ�����棬���������ʹ��axios��ʱ��ֱ��  this.$http�Ϳ����� */
 Vue.prototype.$http = axios;


Vue.use(Vuex)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    app: App
  },
  router,
  store: store.store
}).$mount('#app')


