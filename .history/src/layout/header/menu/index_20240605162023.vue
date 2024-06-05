<template>
  <div class="header-menu">
    <el-card style="width: 240px">hover</el-card>
    <div class="border"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  .border {
    background: linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red
    );
    width: 100%;
    height: 100%;
    border: 1px solid  linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red
    );
    position: absolute;
    z-index: -1;
  }
}
</style>
