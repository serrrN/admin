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
        <el-table-column type="selection" width="45" />
        <el-table-column prop="_id" label="编号" width="250" />
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
        <el-table-column label="创建时间">
          <template #="{ row }">
            <span>{{ day(row.createTime).format('YYYY-MM-DD') }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updateTime" label="上次修改时间">
          <template #="{ row }">
            <span>{{ row.createTime }}</span>
          </template>
        </el-table-column>
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
  <el-dialog v-model="dialogVisible" title="添加知识点" width="500">
    <el-form :data="knowledgeData">
      <el-form-item label="问题:" props="question">
        <el-input
          placeholder="请输入问题"
          v-model="knowledgeData.question"
        ></el-input>
      </el-form-item>
      <el-form-item label="答案:" props="answer">
        <el-input
          placeholder="请输入答案"
          v-model="knowledgeData.answer"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签:" props="tags">
        <div style="display: flex">
          <el-input
            placeholder="请输入标签,多个以空格分隔"
            style="width: 280px"
            v-model="knowledgeData.tags"
          ></el-input>
          <el-button
            :type="chooseTagDialogVisible ? '' : 'primary'"
            @click="chooseTag"
            style="margin-left: 15px"
          >
            {{ chooseTagDialogVisible ? '收起' : '选择已有的标签' }}
          </el-button>
        </div>
      </el-form-item>
      <div
        style="display: flex; flex-direction: column"
        v-show="chooseTagDialogVisible"
      >
        <span style="font-size: 15px; line-height: 24px; padding-bottom: 5px">
          选择已有的标签
        </span>
        <div>
          <el-select v-model="value" placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button icon="Plus" style="margin-left: 15px" />
        </div>
      </div>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addKnowledgeData">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllKnowledge, addKnowledge } from '@/api/knowledgeManage'
import type {
  KnowledgeResponseData,
  KnowledgeList,
  ResponseData,
  Knowledge,
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
const chooseTagDialogVisible = ref(false)
//添加知识
const knowledgeData = ref<Knowledge>({
  question: '',
  answer: '',
  tags: '',
})
const addKnowledgeData = async () => {
  dialogVisible.value = false
  const data = {
    ...knowledgeData.value,
    tags: (knowledgeData.value.tags as string).split(' '),
  }
  const res: ResponseData = await addKnowledge(data)
  console.log(res)
  if (res.code === 1) {
    ElMessage.success('添加成功')
    getTableData()
  } else {
    ElMessage.error('添加失败')
  }
}
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const chooseTag = () => {
  chooseTagDialogVisible.value = !chooseTagDialogVisible.value
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
