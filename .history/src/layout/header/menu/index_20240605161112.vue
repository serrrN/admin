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
    background-color: purple;
  }
}
</style>
