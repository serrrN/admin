<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="header">
      <div class="logo-wrapped">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </div>
      <div class="name">后台管理系统</div>
      <div class="fold-icon-wrapped">
        <el-icon size="30">
          <Fold />
        </el-icon>
      </div>
    </div>

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
      <span>系统设置</span>
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
      .logo {
        width: 28px;
      }
    }
    .name {
      text-align: center;
      font-size: 25px;
      background-color: red;
    }
    .fold-icon-wrapped {
      width: 10%;
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
  width: 260px;
  min-height: 400px;
}
</style>
