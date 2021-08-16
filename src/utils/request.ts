import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API as string,
  // 当发送跨域请求时携带cookie
  // withCredentials: true,
  timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 指定请求令牌
    config.headers['X-Token'] = 'token'
    return config
  },
  (error) => {
    // 请求错误的统一处理
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(

  /**
   * 通过判断状态码统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  (response) => {
    const res = response.data

    // 如果状态码不是200则认为有错误
    if (res.code !== 200) {
      console.log('fail:' + res)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
