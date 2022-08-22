/**
 * 该工具方法用于处理storage存储数据设定过期时间
 */

//接口设定需要传递过来的参数值
interface IData {
  expire?: number
  [key: string]: any
}

export default {
  /**
   * 存储方法
   * @param key localstorage中的key值
   * @param data  数据值
   */
  set(key: string, data: IData): void {
    //判断是否传递过期时间 传递过来expire以秒为单位
    /**
     * 13位的时间戳，其精度是毫秒(ms)；
      10位的时间戳，其精度是秒(s)；
      13位数的时间戳转化为10位数的时间戳 ，除以1000；
      10位数的时间戳转化为13位数的时间戳 ，乘以1000；
     */
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  /**
   *查询本地存储的值
   * @param key
   */
  get(key: string): IData | null {
    const item = localStorage.getItem(key)
    console.log('获取', item)
    if (item) {
      //表示本地存储有这个数据
      const data = JSON.parse(item)
      const expire = data?.expire
      if (expire && expire < new Date().getTime()) {
        //时间戳毫秒数对比如果存储的毫秒数小于当前时间毫秒数表示已经过期
        localStorage.removeItem(key)
        return null
      }
      return data
    }
    return null
  }
}
