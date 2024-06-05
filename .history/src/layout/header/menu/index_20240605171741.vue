<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: 240px;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative; /* 创建堆叠上下文 */
  transition: all linear 0.3s;
  margin-right: 10px;
  margin-top: 10px;
  z-index: 1; /* 高于::before的z-index */

  &::before {
    content: '';
    width: calc(100% + 10px); /* 比.header-menu宽10px */
    height: calc(100% + 10px); /* 比.header-menu高10px */
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    position: absolute;
    top: -5px; /* 向上移动5px */
    left: -5px; /* 向左移动5px */
    z-index: -1; /* 低于.header-menu的z-index */
     /* 默认隐藏 */
  }

  &:hover::before {
      /* 悬停时显示 */
  }
}



</style>
