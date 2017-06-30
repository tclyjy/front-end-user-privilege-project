import fetch from '../utils/fetch'

export default function checkToken(token) {

  const params = {
    token: token
  }
  return fetch({
    url: '/checkToken',
    method: 'GET',
    params
  })
}
