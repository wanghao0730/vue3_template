<script setup lang="ts">
import { onMounted, provide } from 'vue'
import * as userApi from '@/api/userApi'

//在这里导入echarts 通过provide让后面获取实例
import * as echarts from 'echarts'

provide('echarts', echarts)

const getUserInfo = async () => {
  const res = await userApi.userInfo()
  console.log(res)
}

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
