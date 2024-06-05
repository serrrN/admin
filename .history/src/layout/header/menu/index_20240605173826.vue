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
  background-image: linear-gradient(
    90deg,
    #00c0ff 0%,
    #ffcf00 49%,
    #fc4f4f 80%,
    #00c0ff 100%
  );
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 3vw;
  font-weight: bold;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    width: calc(100% + 6px); /* 比 .header-menu 宽 */
    height: calc(100% + 6px); /* 比 .header-menu 高 */
    background-color: white;
    position: absolute;
    top: -3px; /* 向上移动 3px */
    left: -3px; /* 向左移动 3px */
    z-index: -1;
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
