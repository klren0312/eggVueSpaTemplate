import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Storage from 'zstorage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$storage = Storage
Vue.config.productionTip = false

Vue.use(ElementUI)

// 判断登录态是否超时
const userData = Storage.get('admin_user')

if (userData === null || userData === undefined) {
  store.commit('SET_USER', null)
} else {
  store.commit('SET_USER', userData)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
