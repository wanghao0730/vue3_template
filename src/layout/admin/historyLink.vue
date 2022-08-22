<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ title?: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' }
])
</script>
<template>
  <div class="hidden md:block">
    <div class="grid justify-start grid-flow-col gap-2 m-5">
      <a
        v-for="(link, index) of links"
        :key="index"
        class="px-3 py-2 text-sm text-gray-700 bg-white rounded-md"
      >
        {{ link.title }}
        <i class="ml-1 cursor-pointer fas fa-xmark"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
