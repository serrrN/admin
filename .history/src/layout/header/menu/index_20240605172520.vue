<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: 20vw;
  height: 8vw;
  background-color: white;
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
    content: attr(alt);
    width: calc(20vw + 6px);
    height: calc(8vw + 6px);
    background-image: linear-gradient(
      90deg,
      #00c0ff 0%,
      #ffcf00 49%,
      #fc4f4f 80%,
      #00c0ff 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
  }
  &:hover {
    animation: slidebg 2s linear infinite;
  }
}
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>
