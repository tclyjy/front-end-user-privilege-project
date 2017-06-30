// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store';
import $ from 'jquery'

Vue.use(ElementUI)

Vue.config.productionTip = false

const whiteList = ['/login']; // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (store.getters.token) { //是否存在token
    if (to.path === '/login') {
      store.dispatch('getRole', store.getters.token).then(res => {
        if (res.code === '0') {
          console.log('跳转login' + store.getters.token)
          next({
            path: '/login'
          })
          NProgress.done()
        } else {
          store.dispatch('GenerateRoutes', res.role).then(() => {
            next({
              path: '/index'
            })
            NProgress.done()
          })
        }
      })
    } else {
      store.dispatch('getRole', store.getters.token).then(res => {
        if (res.code === '0') {
          next({
            path: '/login'
          })
          NProgress.done()
        } else {
          store.dispatch('GenerateRoutes', res.role).then(() => {
            next()
            NProgress.done()
          })
        }
      })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单内直接进入
      next()
    } else {
      next('/login') // 重定向回登入页
      NProgress.done()
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
