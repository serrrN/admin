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
  z-index: 1; /* 确保在伪元素之上 */

  /* 伪元素用来生成背景效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    z-index: -1; /* 低于 .header-menu 的 z-index */
    opacity: 0; /* 默认隐藏 */
    transition: opacity 0.3s linear; /* 过渡效果 */
  }

  &:hover::before {
    opacity: 1; /* 悬停时显示 */
  }
}



</style>
