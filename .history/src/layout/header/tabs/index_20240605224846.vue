<template>
  <div class="header-tabs">
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs">
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
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
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
  align-items: center;
  justify-content: flex-start;
}
</style>
