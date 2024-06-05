<template>
  <div class="header-tabs">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      class="demo-tabs"
    >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
const editableTabsValue = ref('2')
</script>
<style lang="scss" scoped></style>
