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
import {
  Message
} from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

function hasPermission(role, permissionRoles) {
  if (role === 'surperAdmin') return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return permissionRoles.indexOf(role) >= 0
}

const whiteList = ['/login']; // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (store.getters.token) { //是否存在token
    console.log(router.options.routes);
    if (to.path === '/login') {
      // console.log(1)
      next({
        path: '/'
      })
    } else {
      // console.log(2)
      if (store.getters.role === '') {
        // console.log(3)
        store.dispatch('getRole', store.getters.token).then(res => {
          store.dispatch('GenerateRoutes', res.role).then(res => {
            router.addRoutes(store.getters.addRoutes)
            next(to.path)
          })
        }).catch(err => {
          console.log(err)
        })
      } else {
        // console.log(4)
        if (hasPermission(store.getters.role, to.meta.role)) {
          // console.log(store.getters.role);
          // console.log(to.meta.role);
          next();
        } else {
          // console.log(5)
          next({
            path: '/401',
            query: {
              noGoBack: true
            }
          });
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
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
