<template>
  <div class="header-tabs">
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs">
      <template #add-icon></template>
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])
</script>
<style lang="scss" scoped>
.header-tabs {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
:deep(.el-tabs__header) {
  margin: 0;
}
</style>
