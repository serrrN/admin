<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import routes from '@/router/routes'
import { useSystemStore } from '@/store/modules/system'
const systemStore = useSystemStore()
const route = useRoute()
watch(route, (item: RouteLocationNormalizedLoaded) => {
  systemStore.tabs = Array.from(new Set([...systemStore.tabs, item.fullPath]))
  console.log(item.fullPath, routes)
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
</style>
