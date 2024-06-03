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
  background-color: bisque;
  display: flex;
  .left {
    height: 100%;
    width: 100%;
    background-color: red;
  }
}
</style>
