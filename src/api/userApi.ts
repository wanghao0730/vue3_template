import Axios from '@/plugins/axios/axios'

//定义用户内部也就是result中有什么数据
export interface IUser {
  name: string
  age: number
  avatar: string
}

function userInfo() {
  return Axios.requeset<IUser>({
    url: 'info',
    method: 'get'
  })
}

export { userInfo }
