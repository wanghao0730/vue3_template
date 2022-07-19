<script setup lang="ts">
import { onMounted } from 'vue'
import * as userApi from '@/api/userApi'

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
