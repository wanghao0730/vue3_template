<script setup lang="ts">
import {
  Field,
  Form,
  ErrorMessage,
  defineRule,
  configure,
  useField
} from 'vee-validate'
import { ref } from 'vue'

//使用vee-validate中的内置规则
import { required, min, max, confirmed, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n' //中文国际化
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
//利用defineRule函数定义
//数据
console.log(zh_CN)
const userInput = ref<string>('')

//通过 configure 函数去配置中文标准
configure({
  generateMessage: localize('zh_CN', zh_CN)
})
const emailRules = (value) => {
  console.log('传递的值' + value)
  return /@/.test(value) ? true : '格式错误'
}

defineRule('email', email)
defineRule('required', required)
const onSubmit = (value) => {
  // console.log(value) {account: '@1149'}
  // alert('验证通过')
}
</script>
<script lang="ts">
export default {
  route: {
    meta: {
      name: 'hhh'
    }
  }
}
</script>
<template>
  <div class="testInput">
    <Form @submit="onSubmit">
      <Field
        name="account"
        :rules="{ required: true, email: true }"
        :validate-on-input="true"
        #default="{ field, errorMessage }"
      >
        <!--
           {{ field }}
        { "name": "account", "onBlur": [ null, null ], "onInput": [ null ], "onChange": [ null ] }
         子组件向上传递的数据 -->
        <input v-bind="field" v-model="userInput" />
        <p>
          <!-- 也可以使用子组件向上传递的错误消息数据 -->
          {{ errorMessage }}
        </p>
      </Field>
      <!-- <error-message name="account" /> -->
      <button>提交</button>
    </Form>
  </div>
</template>
<style lang="scss" scoped>
.testInput {
  @apply flex h-screen w-screen bg-gray-100 rounded-sm justify-center items-center;
}
</style>
