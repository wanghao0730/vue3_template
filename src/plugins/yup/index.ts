//在这里引入yup 然后到处所有
import * as yup from 'yup'

/**
 * 配置yup
 */
//${label} 占位符接收页面书写的内容
yup.setLocale({
  mixed: {
    required: '${label}必须输入'
  },
  string: {
    email: '邮箱必须输入'
  }
})

export default yup
