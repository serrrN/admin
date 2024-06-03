<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="name">后台管理系统</div>
    <el-menu-item index="1">
      <el-icon><document /></el-icon>
      <span>Navigator one</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>Navigator two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><document /></el-icon>
      <span>Navigator four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu {
  height: 100%;
  .name {
    text-align: center;
    padding: 20px 0;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
