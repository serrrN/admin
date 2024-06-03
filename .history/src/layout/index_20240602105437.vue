<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
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
  width: 100vw;
  height: 100vh;
}
</style>
