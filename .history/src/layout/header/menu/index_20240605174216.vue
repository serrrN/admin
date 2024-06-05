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
  height: calc(3vw);
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
  margin: 5px;
  &:after {
    content: attr(alt);
    width: 20vw;
    height: 3vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    position: absolute;
    bottom: 1px;
  }
  &:hover {
    animation: slidebg 2s linear infinite;
    width: calc(20vw + 5px);
    height: calc(3vw + 5px);
  }
}
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>
