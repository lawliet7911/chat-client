import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Login from '@/views/Login'
import Main from '@/views/Main'
import 'element-ui/lib/theme-default/index.css'
import 'animate.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/mian',
      name: 'mian',
      component: Main
    }
  ]
})
