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
    width: 100%; /* 与.header-menu同宽 */
    height: 100%; /* 与.header-menu同高 */
    padding: 5px; /* 增加padding以实现扩大效果 */
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    position: absolute;
    top: -5px; /* 将伪元素上移5px */
    left: -5px; /* 将伪元素左移5px */
    z-index: -1; /* 低于.header-menu的z-index */
    visibility: hidden; /* 默认隐藏 */
  }

  &:hover::before {
    visibility: visible; /* 悬停时显示 */
  }
}
</style>
