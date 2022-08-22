<script setup lang="ts">
defineEmits<{
  (e: 'loginEmit'): void
}>()
</script>

<template>
  <button class="button-class" @click="$emit('loginEmit')">登录</button>
</template>

<style lang="scss">
.button-class {
  @apply w-full py-2 mt-6 text-white duration-300 rounded-md hover:bg-violet-300 bg-violet-700;
}
</style>
