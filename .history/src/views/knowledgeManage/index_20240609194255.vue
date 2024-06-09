<template>
  <el-card class="knowledge-card">
    <div class="table-header">
      <!-- 对知识进行搜索 -->
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
      <!-- 对知识进行添加和批量删除 -->
      <div class="button-wrapped">
        <el-button type="primary">添加</el-button>
        <el-button type="primary" disabled>批量删除</el-button>
      </div>
    </div>
    <!-- 展示知识的表格 -->
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="编号" width="180" />
        <el-table-column prop="name" label="问题" width="180" />
        <el-table-column prop="address" label="答案" />
        <el-table-column prop="address" label="标签" />
        <el-table-column prop="address" label="创建时间" />
        <el-table-column prop="address" label="上次修改时间" />
        <el-table-column prop="address" label="操作">
          <template #default="scope">
            <el-button type="primary" @click="change(scope?._id)">
              修改
            </el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        layout="prev,pager,next,jumper,->,total,sizes "
        :total="100"
      />
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllKnowledge } from '@/api/knowledgeManage'
import type { KnowledgeResponseData } from '@/api/knowledgeManage/type'
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const res: KnowledgeResponseData = await getAllKnowledge()
  console.log('@@@', import.meta.env)
  console.log(res)
}
const tableData = ref([
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
])
const change = (_id: string) => {
  console.log(_id)
}
</script>
<style lang="scss" scoped>
.knowledge-card {
  .table-header {
    width: 100%;
    display: flex;
    flex-direction: column;
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
  .table-content {
    padding-top: 10px;
    .el-table {
      margin-bottom: 10px;
    }
  }
}
</style>
