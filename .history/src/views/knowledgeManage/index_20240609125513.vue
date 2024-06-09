<template>
  <el-card>
    <div class="table-header">
      <el-form>
        <el-form-item label="知识名称:">
          <el-input placeholder="对知识进行搜索" />
        </el-form-item>
      </el-form>
      <div class="search-wrapped"></div>
      <div class="button-wrapped">
        <el-button type="primary">添加知识</el-button>
      </div>
    </div>
  </el-card>
  <el-card>
    <div class="table-content"></div>
  </el-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.table-header {
  display: flex;
  justify-content: space-between;
}
</style>
