<template>
  <div class="layout-container">
    <div :class="systemStore.isCollapse ? 'left left-collapse' : 'left'">
      <Menu />
    </div>
    <div :class="systemStore.isCollapse ? 'right right-collapse' : 'right'">
      <div class="header"><Header /></div>
      <div class="main"><Main /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Main from './main/index.vue'

import { useSystemStore } from '@/store/modules/system'
const systemStore = useSystemStore()
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f3f3f3;
  transition: all linear 0.5s;

  .left {
    height: 100%;
    width: $layout-container-left-max-width;

  }
  .left-collapse {
    width: $layout-container-left-min-width;
  }
  .right {
    width: calc(100% - $layout-container-left-max-width);
    transition: all linear 0.1s;
    .header {
      width: 100%;
      height: $layout-container-header-height;
      display: flex;
      justify-content: flex-end;
      background-color: white;
    }
    .main {
      height: calc(100% - $layout-container-header-height);
      width: calc(100%);
    }
  }
  .right-collapse {
    width: calc(100% - $layout-container-left-min-width);
  }
}
</style>
