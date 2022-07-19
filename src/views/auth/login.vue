<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive<{
  account: string | number
  password: string | number
}>({
  account: '123456',
  password: ''
})
</script>
<template>
  <div class="flex items-center justify-center h-screen p-5 bg-slate-300">
    <div
      class="w-[720px] h-96 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="flex flex-col p-6">
        <h2 class="mt-3 text-center text-graydelay-700">会员登录</h2>
        <div class="mt-6">
          <CommInput placeHolader="请输入手机号码" v-model="form.account" />
          <CommInput placeHolader="请输入密码" v-model="form.password" />
        </div>
        <CommButton />
        <div class="flex justify-center gap-2 mt-8">
          <a href="" class="text-xs text-gray-700">网站首页</a>
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img
          src="@/assets/bg_image/bg.jpg"
          alt=""
          class="object-cover w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
