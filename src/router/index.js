import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import HomeIndex from '@/views/HomeIndex'
import UserShow from '@/views/UserShow'
import Privilege from '@/views/Privilege'
import page401 from '@/views/page401'
import page404 from '@/views/page404'
import Form from '@/views/Form'
import Table from '@/views/Table'
Vue.use(Router)

export const constantRouterMap = [{
    path: '',
    redirect: '/index',
    name: '首页',
    component: Home,
    hidden: false,
    noDropdown: true,
    children: [{
      path: 'index',
      name: '首页',
      component: HomeIndex
    }]
  }, {
    path: '/form',
    redirect: '/form/index',
    name: '表单填写',
    component: Home,
    hidden: false,
    noDropdown: true,
    children: [{
      path: 'index',
      name: '表单填写',
      component: Form
    }]
  }, {
    path: '/table',
    redirect: '/table/index',
    name: '表格',
    component: Home,
    hidden: false,
    noDropdown: true,
    children: [{
      path: 'index',
      name: '表格',
      component: Table
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true
  }, {
    path: '/errpage',
    redirect: 'errpage/401',
    name: '错误页面',
    component: Home,
    hidden: false,
    noDropdown: false,
    children: [{
      path: '401',
      name: '401',
      component: page401
    }, {
      path: '404',
      name: '404',
      component: page404
    }]
  },
  {
    path: '/401',
    name: '401',
    component: page401,
    hidden: true
  }, {
    path: '/404',
    name: '404',
    component: page404,
    hidden: true
  }
]

export const privilegeRouterMap = [{
  path: '/user',
  redirect: '/user/show',
  name: '用户管理',
  component: Home,
  meta: {
    role: ['superAdmin', 'admin']
  },
  hidden: false,
  noDropdown: false,
  children: [{
    path: 'show',
    name: '用户列表',
    meta: {
      role: ['superAdmin', 'admin']
    },
    component: UserShow
  }, {
    path: 'privilege',
    name: '权限管理',
    meta: {
      role: ['superAdmin']
    },
    component: Privilege
  }]
}, {
  path: '*',
  redirect: '/401',
  hidden: true
}]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
