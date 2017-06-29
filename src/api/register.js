import fetch from '../utils/fetch'

export function register(userName, userPwd) {

  const data = {
    userName,
    userPwd
  }
  return fetch({
    url: '/user/register',
    method: 'post',
    data
  })
}
