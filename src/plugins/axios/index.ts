// 关于axios的封装
import { IUser } from '@/api/userApi'
import axios, { AxiosRequestConfig } from 'axios'
import { IResponseResult } from 'types/responseResult'
class Axios {
  private instance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.interceptors()
  }
  //请求方法requeset方法接收传递过来的数据类型， D的类型是IResponseResult和传入的T组合类型 Promise<D>表示返回的是个promise 数据的类型是D
  public requeset<T, D = IResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }

  //分别创建拦截器
  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  //请求拦截
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
  //响应拦截
  private interceptorsResponse() {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default Axios
