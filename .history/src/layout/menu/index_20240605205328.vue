<template>
  <el-menu
    default-active="home"
    :class="
      systemStore.isCollapse ? 'el-menu-vertical-collapse' : 'el-menu-vertical'
    "
    :collapse="systemStore.isCollapse"
    :router="true"
    collapse-transition
    @open="handleOpen"
    @close="handleClose"
  >
    <div class="header">
      <div class="manage-msg" v-show="!systemStore.isCollapse">
        <div class="logo-wrapped">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle color-fg-default"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
            ></path>
          </svg>
        </div>
        <div class="name">后台管理系统</div>
      </div>
      <div class="fold-icon-wrapped" @click="handleCollapse">
        <el-icon size="18" color="rgb(64, 158, 255)">
          <component
            :is="systemStore.isCollapse ? 'Expand' : 'Fold'"
          ></component>
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
import { useSystemStore } from '@/store/modules/system'
const systemStore = useSystemStore()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleCollapse = () => {
  systemStore.isCollapse = !systemStore.isCollapse
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
    //管理系统信息
    .manage-msg {
      display: flex;
      // logo容器
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
      // 管理系统名称
      .name {
        text-align: center;
        font-size: 25px;
        width: 160px;
        color: $theme-color;
        font-weight: 600;
      }
    }

    // 折叠图标容器
    .fold-icon-wrapped {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  //菜单名称
  .el-menu-item span {
    color: rgb(48, 49, 51);
    font-weight: 400;
    font-size: 17px;
    line-height: 56px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino';
  }
}
// 菜单不处于塌陷状态
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
  min-width: 20%;
}
</style>
