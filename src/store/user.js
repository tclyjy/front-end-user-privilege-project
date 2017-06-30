import login from '../api/login'
import register from '../api/register'
import checkToken from '../api/checkToken'
import Cookies from 'js-cookie'
import {
  Message
} from 'element-ui'

const user = {
  state: {
    role: '',
    token: Cookies.get('Admin-Token')
  },
  mutations: {
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.userName, userInfo.userPwd).then(response => {
          let data = response.data
          if (data.code === '0') {
            Message({
              message: data.msg,
              type: 'error',
              duration: 5 * 1000
            })
            resolve('error')
          } else {
            Message({
              message: '登入成功',
              type: 'success',
              duration: 3 * 1000
            })
            Cookies.set('Admin-Token', data.token)
            commit('SET_TOKEN', data.token)
            commit('SET_ROLE', data.role)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    Register({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo.userName, userInfo.userPwd).then(response => {
          let data = response.data
          console.log(data)
          if (data.code === '0') {
            Message({
              message: data.msg,
              type: 'error',
              duration: 5 * 1000
            })
            resolve('error')
          } else {
            Message({
              message: '注册成功',
              type: 'success',
              duration: 5 * 1000
            })
            commit('SET_ROLE', data.role)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    getRole({
      commit
    }, token) {
      return new Promise((resolve, reject) => {
        checkToken(token).then(response => {
          let data = response.data
          console.log(data);
          if (data.code === '0') {
            Message({
              message: '登入超时，即将跳转回登入页面',
              type: 'error',
              duration: 5 * 1000
            })
            Cookies.remove('Admin-Token')
            commit('SET_TOKEN', undefined)
          } else {
            commit('SET_ROLE', data.role)
          }
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
