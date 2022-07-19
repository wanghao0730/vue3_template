// 该文件用于处理import.meta.env中数据值的问题(类型不一致)
import _ from 'lodash'
class Helper {
  // interface ImportMetaEnv extends IEnvParams {} 在外部的types继承过
  public env = {} as ImportMetaEnv

  constructor() {
    this.env = this.getEnvs()
  }

  private getEnvs(): ImportMetaEnv {
    //进行克隆一份
    const envs: any = _.cloneDeep(import.meta.env)

    Object.entries(import.meta.env as Record<string, any>).forEach(
      ([key, value]) => {
        if (value === 'true' || value === 'false') {
          envs[key] = value === 'true' ? true : false
        } else if (/^\d+$/.test(value)) {
          envs[key] = Number(value)
        } else if (value === 'null') {
          envs[key] = null
        } else if (value === 'undefined') {
          envs[key] = undefined
        }
      }
    )
    return envs
  }
}

const helper = new Helper()

const { env } = helper

export default helper

export { env }
