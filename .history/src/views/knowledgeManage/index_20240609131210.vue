<template>
  <!-- 对知识进行搜索 -->
  <el-card class="card">
    <div class="table-header">
      <el-form>
        <el-form-item label="知识名称:">
          <el-input placeholder="对知识进行搜索" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" disabled>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 展示知识的表格 -->
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </el-card>
</template>
<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style lang="scss" scoped>
.table-header {
  width: 100%;
  .el-form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    .el-form-item {
      margin-right: 15px;
    }
  }
}
</style>
