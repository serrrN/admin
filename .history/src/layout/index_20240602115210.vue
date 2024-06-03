<template>
  <div class="layout-container">
    <div class="left">aside</div>
    <div class="right">
      <div class="header">header</div>
      <div class="main">main</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    height: 100%;
    width: $layout-container-left-max-width;
    background-color: red;
  }
  .right {
    width: calc(100% - $layout-container-left-max-width);
    .header {
      width: 100%;
      height: 100px;
      background-color: skyblue;
    }
    .main {
      height: calc(100% - 100px);
      width: 100%;
      background-color: gray;
    }
  }
}
</style>
