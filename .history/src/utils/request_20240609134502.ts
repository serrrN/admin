import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  return config
})
//响应拦截器
request.interceptors.response.use((config) => {
  return config
})

export default request
