import fetch from '../utils/fetch'
import md5 from 'js-md5'

export function login(userName, userPwd) {
  let md5UserName = md5(userName)
  let md5UserPwd = md5(userPwd)
  
  const data = {
    userName: md5UserName,
    userPwd: md5UserPwd
  }
  return fetch({
    url: '/user/login',
    method: 'post',
    data
  })
}
