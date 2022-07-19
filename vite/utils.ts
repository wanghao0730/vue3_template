import _ from 'lodash'

export function parseEnv(env: Record<string, any>): IEnvParams {
  //进行深拷贝
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    //判断数据类型
    if (value === 'true' || value === 'false') {
      envs[key] = value === 'true' ? true : false
    } else if (/^\d+$/.test(value)) {
      envs[key] = Number(value)
    } else if (value === 'null') {
      envs[key] = null
    } else if (value === 'undefined') {
      envs[key] = undefined
    }
  })

  return envs
}
