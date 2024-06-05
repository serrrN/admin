<template>
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    collapse-transition
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="header">
      <div class="logo-wrapped">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </div>
      <div class="name">后台管理系统</div>
      <div class="fold-icon-wrapped">
        <el-icon size="18" color="rgb(64, 158, 255)">
          <Fold />
        </el-icon>
      </div>
    </div>

    <el-menu-item index="home">
      <el-icon><House /></el-icon>
      <template #title>控制台</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <template #title>知识管理</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>标签管理</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <template #title>系统设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue/dist/types'
import { ref } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  .header {
    display: flex;
    height: 70px;
    line-height: 70px;
    justify-content: space-between;
    .logo-wrapped {
      line-height: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      .logo {
        width: 28px;
      }
    }
    .name {
      text-align: center;
      font-size: 25px;
      width: 160px;
      color: $theme-color;
      font-weight: 600;
    }
    .fold-icon-wrapped {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .el-menu-item span {
    color: rgb(48, 49, 51);
    font-weight: 400;
    font-size: 17px;
    line-height: 56px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino';
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
</style>
