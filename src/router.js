import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/index.vue'
import Create from './views/Create/create.vue'
import Detail from './views/Detail/template.vue'
import Edit from './views/Edit/edit.vue'
import Login from './views/Login/login.vue'
import Mine from './views/Mine/mine.vue'
import Register from './views/Register/register.vue'
import User from './views/User/user.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Index },
    { path: '/create', component: Create },
    { path: '/detail', component: Detail },
    { path: '/edit', component: Edit },
    { path: '/login', component: Login },
    { path: '/mine', component: Mine },
    { path: '/register', component: Register },
    { path: '/User', component: User },
    
  ]
})
