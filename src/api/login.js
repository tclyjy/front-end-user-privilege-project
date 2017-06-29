import fetch from '../utils/fetch'

export function login(userName, userPwd) {

  const data = {
    userName,
    userPwd
  }
  return fetch({
    url:'/user/login',
    method: 'post',
    data
  })
}
