import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  return config
})
