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
  .el-card{
    ::before{
      content: "";
      background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
      width: 1001%;
      height: 100%;
      display: block;
    }
  }
}
</style>
