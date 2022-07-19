import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/city',
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
  }
]
