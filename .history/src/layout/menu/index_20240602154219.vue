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
      <span>控制台</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>知识管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span>标签管理</span>
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
    width: 100%;
    height: 70px;
    font-size: 25px;
    line-height: 70px;
  }
  .el-menu-item span {
    color: rgb(48, 49, 51);
    font-size: 14px;
    font-weight: 400;
    line-height: 56px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
  min-height: 400px;
}
</style>
