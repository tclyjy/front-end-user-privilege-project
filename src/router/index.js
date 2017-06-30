import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import HomeIndex from '@/views/HomeIndex'
Vue.use(Router)

export const constantRouterMap = [{
  path: '/',
  name: '首页',
  component: Home,
  hidden: false,
  noDropdown: true,
  children: [{
    path: 'index',
    component: HomeIndex
  }]
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  hidden: true
}, {
  path
}]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
