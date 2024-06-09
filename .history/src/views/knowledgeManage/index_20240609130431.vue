<template>
  <!-- 对知识进行搜索 -->
  <el-card class="card">
    <div class="table-header">
      <el-form>
        <el-form-item label="知识名称:">
          <el-input placeholder="对知识进行搜索" />
        </el-form-item>
      </el-form>
      <div class="button-wrapped">
        <el-button type="primary">搜索</el-button>
        <el-button type="primary">重置</el-button>
      </div>
    </div>
  </el-card>
  <!-- 展示知识的表格 -->
  <el-card>
    <div class="table-content">
      <el-table></el-table>
    </div>
  </el-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.table-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
</style>
