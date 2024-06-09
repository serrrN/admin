<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
watch(useRoute, (i) => {
  console.log(i)
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
