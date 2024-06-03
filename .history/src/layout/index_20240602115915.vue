<template>
  <div class="layout-container">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="right">
      <div class="header">header</div>
      <div class="main">main</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from './menu/index.vue'
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
    }
    .main {
      height: calc(100% - $layout-container-header-height);
      width: 100%;
    }
  }
}
</style>
