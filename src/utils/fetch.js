import axios from 'axios'
import store from '../store'
import {
  Message
} from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://111.230.129.242:3000',
  timeout: 5000 // 请求超时
})

// request 拦截器
service.interceptors.request.use(config => {
  // 在request之前
  if (store.getters.token) {
    config.headers['authorization'] = store.getters.token; // 自定义携带token的头部
  }
  return config
}, error => {
  // 在request错误之后
  console.log(error); // console debug
  Promise.reject(error);
})

// response 拦截器

service.interceptors.response.use(response => response, error => {
  console.log(error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
