import { defineStore } from 'pinia'
import { ref,watch } from 'vue'
export const useSystemStore = defineStore('system', () => {
  const isCollapse = ref(false)
  const tabs = ref([])
  return { isCollapse,tabs }
})
