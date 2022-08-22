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

//定义请求返回的数据类型
interface IUserLogin {
  token: string
}

function userLogin(data: any) {
  return Axios.requeset<IUserLogin>({
    url: 'login',
    method: 'post',
    data
  })
}

export { userInfo, userLogin }
