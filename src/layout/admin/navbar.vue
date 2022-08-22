<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
interface IAvatar {
  size?: string | number
  src?: string
}

//控制头像的下拉显示
const dropDownLink = ref()

//处理下拉显示内容
const handleDropDown = () => {
  console.log('点击了')
  dropDownLink.value.handleOpen()
}

//用于定义用户的信息
const userAvatar = reactive<IAvatar>({
  size: 'default',
  src: '/images/logo.png'
})

const { size: avatarSize, src: avatarSrc } = toRefs(userAvatar)
</script>

<template>
  <div class="flex items-center justify-between p-4 bg-white navbar">
    <!-- 头部的导航栏 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- /头部的导航栏 -->
    <!-- 右边用户头像等信息  -->
    <div class="right-menu">
      <div class="right-menu-item">
        <i class="text-2xl cursor-pointer fas fa-expand"></i>
      </div>
      <div class="user-avatar right-menu-item" @click="handleDropDown">
        <!-- 头像位置的下拉显示内容 -->
        <el-dropdown ref="dropDownLink" trigger="click">
          <!-- 根据头像的点击然后下来显示内容区域 -->
          <span class="el-dropdown-link">
            <el-avatar shape="square" :size="avatarSize" :src="avatarSrc" />
            <el-icon class="text-black el-icon--right">
              <!-- 使用了ep提供的down下拉箭头 -->
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>布局设计</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- <div class="right-menu-item">用户姓名</div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  .right-menu {
    @apply flex items-center;
    .right-menu-item {
      @apply block px-2 h-full align-text-bottom;
    }
  }
}
</style>
