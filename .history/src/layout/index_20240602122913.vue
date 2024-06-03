<template>
  <div class="layout-container">
    <div class="left">
      <Menu />
    </div>
    <div class="right">
      <div class="header"><Header /></div>
      <div class="main"><Main /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Main from './main/index.vue'
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    height: 100%;
    width: $layout-container-left-max-width;
  }
  .right {
    width: calc(100% - $layout-container-left-max-width);
    .header {
      width: 100%;
      height: $layout-container-header-height;
      display: flex;
      justify-content: space-evenly;
    }
    .main {
      height: calc(100% - $layout-container-header-height);
      width: 100%;
    }
  }
}
</style>
