import fetch from '../utils/fetch'

export default function getPrivilege(token) {

  return fetch({
    url: '/getPrivilege',
    method: 'GET'
  })
}
