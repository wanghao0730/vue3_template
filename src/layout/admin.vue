<script setup lang="ts">
import Menu from './admin/menu.vue'
import NavBar from './admin/navbar.vue'
import HistoryLinkVue from './admin/historyLink.vue'
</script>
<script lang="ts">
export default {
  route: {
    meta: {
      // auth: true //是否开启鉴权
    }
  }
}
</script>
<template>
  <div class="flex w-full h-full admin">
    <Menu class="hidden md:block" />
    <div class="flex-1 bg-gray-200 content">
      <NavBar />
      <HistoryLinkVue />
      <div class="m-5 rounded-md">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
