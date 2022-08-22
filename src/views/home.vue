<script setup lang="ts">
import { ref } from 'vue'

let userAvatar = ref<string>(
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
)
</script>
<script lang="ts">
export default {
  route: {
    name: 'home'
  }
}
</script>
<template>
  <div class="home_page">
    <img
      :src="userAvatar"
      class="object-cover w-40 h-40 border-8 border-white rounded-full"
    />
    <button
      class="w-auto h-auto px-5 py-3 mt-5 text-white bg-purple-700 rounded-md"
    >
      后台管理
    </button>
  </div>
</template>
<style lang="scss" scoped>
.home_page {
  @apply bg-purple-500 h-screen w-screen flex flex-col justify-center items-center;
}
</style>
