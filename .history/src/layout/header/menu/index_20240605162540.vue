<template>
  <div class="header-menu">
    <el-card style="width: 240px">hover</el-card>
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
  .el-card {
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
