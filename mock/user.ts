import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        type: 'success',
        result: {
          name: 'boy',
          age: 18,
          avatar: '/avatar/xj.jpg'
        }
      }
    }
  },
  //用户登录请求
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        result: {
          token: Random.string(8)
        }
      }
    }
  }
] as MockMethod[]
