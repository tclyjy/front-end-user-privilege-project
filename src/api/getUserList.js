import fetch from '../utils/fetch'

export default function logout() {
  return fetch({
    url: '/getUserList',
    method: 'get',
  })
}
