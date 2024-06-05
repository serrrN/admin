<template>
  <div class="header-menu">
    <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: calc(20vw);
  height: calc(4vw);
  background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 3vw;
  font-weight: bold;
  position: relative;
  z-index: 1; // 设置z-index，确保内容在伪元素之上

  &:after {
    content: attr(alt);
    width: 100%; // 使用100%宽度，以覆盖整个.header-menu
    height: 100%; // 使用100%高度，以覆盖整个.header-menu
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; // 设置较低的z-index，确保伪元素在内容之下
  }

  &:hover {
    animation: slidebg 2s linear infinite;
    width: calc(20vw + 6px);
    height: calc(4vw + 6px);
  }
}

@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}




</style>
