import axios from 'axios'
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})
//请求拦截器
instance.interceptors.request.use((config) => {
  return config
})
//响应拦截器
instance.interceptors.response.use((config) => {
  return config
})

export default instance
