import fetch from '../utils/fetch'

export default function register(userName, userPwd) {

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
