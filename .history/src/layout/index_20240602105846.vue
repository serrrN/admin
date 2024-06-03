<template>
  <div class="layout-container">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  .el-aside {
    height: 100%;
    width: 200px;
    background-color: yellow;
  }
}
</style>
