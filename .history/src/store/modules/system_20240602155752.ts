import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSystemStore = defineStore('system', () => {
  const isCollapse = ref(false)

  return { isCollapse }
})
