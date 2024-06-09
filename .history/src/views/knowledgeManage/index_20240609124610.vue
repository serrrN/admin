<template>
  <el-card>
    <div class="table-header">
      <div class="search-wrapped">
        <el-input placeholder="对知识进行搜索" />
      </div>
      <div class="button-wrapped">
        <el-button type="primary">添加知识</el-button>
      </div>
    </div>
    <div class="table-content"></div>
  </el-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.table-header {
  display: flex;
  .search-wrapped {
  }
}
</style>
