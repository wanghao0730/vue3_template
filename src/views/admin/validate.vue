<script setup lang="ts">
// import { useForm, useField, defineRule, configure } from 'vee-validate'
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
// import { email, required } from '@vee-validate/rules'

// //使用 yup工具包 实现链式写法
// import * as yup from 'yup'

// defineRule('required', required)
// defineRule('email', email)

// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// })

import vee from '@/plugins/validate'

const { useForm, useField, yup } = vee

//可以给useForm去定义一些自己的规则 改函数会返回一些对象，例如错误消息和处理提交的函数
const { handleSubmit, errors } = useForm({
  initialValues: {
    //定义初始化值
    username: 'wanghao',
    useremail: ''
  },
  //定义规则
  validationSchema: {
    // username: { required: true },
    username: yup.string().required().label('账户'),
    useremail: yup.string().required().email().label('邮箱')
  }
})

//useField函数定义表单属性
//这里会返回通过Ref包括后的数据 可以用于表单双向数据绑定
const { value: usernameVal } = useField('username', {}, { label: '用户名' })
const { value: useremail } = useField('useremail', {}, { label: '邮箱' })

//处理表单提交
const onSubmit = handleSubmit((value) => {
  console.log(value)
  console.log('tongguo')
})
</script>

<template>
  <div class="validate">
    <form @submit="onSubmit">
      <section>
        <input type="text" v-model="usernameVal" />
        <p v-if="errors.username">{{ errors.username }}</p>
      </section>
      <!-- <error-message name="account" /> -->
      <section><input type="text" v-model="useremail" /></section>
      <p v-if="errors.useremail">{{ errors.useremail }}</p>
      <button>提交</button>
    </form>
  </div>
</template>
<style lang="scss">
.validate {
  @apply flex h-screen w-screen bg-gray-100 rounded-sm justify-center items-center;
}
</style>
