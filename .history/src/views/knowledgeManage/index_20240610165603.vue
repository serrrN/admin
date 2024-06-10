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
        <el-button type="primary" @click="dialogVisible = true">添加</el-button>
        <el-button type="primary" disabled>批量删除</el-button>
      </div>
    </div>
    <!-- 展示知识的表格 -->
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="_id" label="编号" width="220" />
        <el-table-column prop="question" label="问题" width="180" />
        <el-table-column prop="answer" label="答案" />
        <el-table-column prop="tags" label="标签" width="180">
          <template #="{ row, $index }">
            <!-- <div class="tagsWrapped">
              <el-tag v-for="(tagName, index) in row.tags" :key="index">
                {{ tagName }}
              </el-tag>
            </div> -->
            <el-button type="primary">点击展示</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column prop="updateTime" label="上次修改时间" />
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

  <!-- 对话框 -->
  <el-button plain @click="dialogVisible = true">
    Click to open the Dialog
  </el-button>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
     <el-form>
      <el-form-item label="问题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="答案">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input></el-input>
      </el-form-item>
     </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllKnowledge } from '@/api/knowledgeManage'
import type {
  KnowledgeResponseData,
  KnowledgeList,
} from '@/api/knowledgeManage/type'
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const res: KnowledgeResponseData = await getAllKnowledge()
  tableData.value = res.results
}
const tableData = ref<KnowledgeList>([])
const change = (_id: string) => {
  console.log(_id)
}
const check = (msg) => {
  console.log(msg)
}

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
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
      .tagsWrapped {
        display: flex;
      }
    }
  }
}
</style>
