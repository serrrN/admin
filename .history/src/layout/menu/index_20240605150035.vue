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
      <div class="manage-msg">
        <div class="logo-wrapped">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </div>
        <div class="name">后台管理系统</div>
      </div>
      <div class="fold-icon-wrapped" @click="handleCollapse">
        <el-icon size="18" color="rgb(64, 158, 255)">
          <Fold />
        </el-icon>
      </div>
    </div>

    <el-menu-item index="home">
      <el-icon><House /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="knowledgeManage">
      <el-icon><reading /></el-icon>
      <template #title>知识管理</template>
    </el-menu-item>
    <el-menu-item index="tagManage">
      <el-icon><CollectionTag /></el-icon>
      <template #title>标签管理</template>
    </el-menu-item>
    <el-menu-item index="systemSetting">
      <el-icon><setting /></el-icon>
      <template #title>系统设置</template>
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
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  // 管理系统菜单头部(展示名字和logo)
  .header {
    display: flex;
    height: 70px;
    line-height: 70px;
    justify-content: space-between;
    transition: all 1s;
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
  min-width: 20%;
}
</style>
