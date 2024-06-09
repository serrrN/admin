import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
export const useSystemStore = defineStore('system', () => {
  const isCollapse = ref(false)
  type TabItem = string | RouteLocationNormalizedLoaded
  const tabs = ref<TabItem[]>([])
  return { isCollapse, tabs }
})
