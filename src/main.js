import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import request from './helper/request'
import blog from './api/blog'
import auth from './api/auth'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
/**测试代码 */
window.request = request
window.blog = blog
window.auth = auth
/***/

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.filter('toDay',function(date){
    let time = new Date(date)
    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
})