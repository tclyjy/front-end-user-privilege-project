import {
  login
} from '../api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.get('Admin-Token')
  },
  mutations: {
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
          console.log(data)
          Cookies.set('Admin-Token', data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
