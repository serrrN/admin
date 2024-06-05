import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {RouteLocationNormalizedLoaded} from "vue-router"
export const useSystemStore = defineStore('system', () => {
  const isCollapse = ref(false)
  const tabs = ref<RouteLocationNormalizedLoaded[]>([])
  return { isCollapse,tabs }
})
