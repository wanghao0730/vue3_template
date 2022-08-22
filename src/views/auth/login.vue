<script setup lang="ts">
import { store } from '@/utils'
import { userLogin } from '@/api/userApi'
//导入自己封装的vee-validate
import vee from '@/plugins/validate'
import { useRouter } from 'vue-router'
const { useForm, useField, yup } = vee

// useform 函数
const { handleSubmit, errors } = useForm({
  initialValues: {
    account: '',
    password: ''
  },
  validationSchema: {
    account: yup.string().required().label('账户').min(8),
    password: yup.string().required().label('密码')
  }
})

// 定义filed字段
const { value: userAccountVal } = useField('account', {}, { label: '账户' })
const { value: userPwdVal } = useField('password', {}, { label: '密码' })

const router = useRouter()
//提交事件回调
const handleLogin = handleSubmit(async (formObj) => {
  console.log(formObj)
  //调用网络请求
  const {
    result: { token }
  } = await userLogin(formObj)
  console.table(token)
  //调用存储
  store.set('token', {
    token,
    expire: 500
  })
  //跳转首页
  router.push('/')
})
</script>

<!-- 因为路由是根据文件自动配置的如果需要在route上配置meta信息可以这样导出 如果使用ts这里的lang不能缺少-->
<script lang="ts">
export default {
  route: { name: 'login', meta: { guest: true } }
}
</script>
<template>
  <div class="flex items-center justify-center h-screen p-5 bg-slate-300">
    <div
      class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="flex flex-col justify-between p-6">
        <h2 class="mt-3 text-center text-graydelay-700">会员登录</h2>
        <div class="mt-3">
          <CommInput placeHolader="请输入账户" v-model="userAccountVal" />
          <span class="waring-msg" v-if="errors.account">{{
            errors.account
          }}</span>
          <CommInput placeHolader="请输入密码" v-model="userPwdVal" />
          <span class="waring-msg" v-if="errors.password">{{
            errors.password
          }}</span>
        </div>
        <CommButton @login-emit="handleLogin" />
        <!-- 微信登录 -->
        <div class="flex flex-row items-center justify-center mt-3">
          <i
            class="p-1 text-white bg-green-600 rounded-full cursor-pointer fa-brands fa-weixin"
          ></i>
        </div>
        <div class="flex justify-center gap-2 mt-8">
          <a href="" class="text-xs text-gray-700">网站首页</a>
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="relative hidden md:block">
        <img
          src="@/assets/bg_image/bg.jpg"
          alt=""
          class="absolute object-cover w-full h-full cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.waring-msg {
  @apply bg-rose-400 text-white w-full block rounded-md mt-2 p-1;
}
</style>
