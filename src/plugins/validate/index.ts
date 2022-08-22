//导入所有对象
import * as veeValidate from 'vee-validate'
//使用vee-validate中的内置规则
import rules from '@vee-validate/rules'
import { localize, loadLocaleFromURL } from '@vee-validate/i18n' //中文国际化
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json' //使用本地的语言包但是会增加打包体积
// import { keys } from 'lodash'
//为了减少文件体积也可以使用 网络加载
loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json'
)

//导入yup
import yup from '@/plugins/yup'

//定义中文国际化 注：先定义语言包 后在使用defineRule注册
veeValidate.configure({
  validateOnBlur: true, //配置全局是否输入就触发
  generateMessage: localize('zh_CN')
})

//将vee-validate中的内置规则批量定义
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }

export default modules
