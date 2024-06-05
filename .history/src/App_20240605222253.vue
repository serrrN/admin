<script setup lang="ts">
import { watch } from "vue"
import { useRoute } from "vue-router"
import routes from "@/router/routes"
import {useSystemStore} from "@/store/modules/system"
const systemStore = useSystemStore()
const route = useRoute()
watch(route, (i) => {
  console.log(i.fullPath,routes)
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
