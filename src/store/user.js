import {
  login
} from '../api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.get('Token')
  },
  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.userName, userInfo.userPwd).then(response => {
          let data = response.data;
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
