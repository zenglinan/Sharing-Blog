import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/index.vue'
import Create from './views/Create/create.vue'
import Detail from './views/Detail/detail.vue'
import Edit from './views/Edit/edit.vue'
import Login from './views/Login/login.vue'
import Mine from './views/Mine/mine.vue'
import Register from './views/Register/register.vue'
import User from './views/User/user.vue'
import store from './store/index'

Vue.use(Router)
window.store = store

const router = new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/create', component: Create, meta: { requiresAuth: true } },
    { path: '/detail/:blogId', component: Detail },
    { path: '/edit/:blogId', component: Edit, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '/mine', component: Mine, meta: { requiresAuth: true } },
    { path: '/register', component: Register },
    {
      path: '/user/:userId',
      component: User,
      beforeEnter: (to, from, next) => {
        if (store.state.auth.user === null) {
          next()
        } else {
          if (to.params.userId == store.state.auth.user.id) {
            next({ path: '/mine' })
          } else {
            next()
          }
        }
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin')
      .then(() => {
        if (!store.state.auth.isLogin) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router