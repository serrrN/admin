<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: calc(240px);
  height: calc(60px);
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all linear 0.3s;
  margin-right: 10px;
  margin-top: 10px;
  position: relative;
  z-index: 10;
  &::before {
    content: '';
    width: calc(240px + 10px);
    height: calc(60px + 10px);
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
    visibility: hidden;
    position: absolute;
    z-index: -1;
    top:0;
    left: 0;
  }
}
.header-menu:hover {
  &::before{
    visibility: visible;
  }
}
</style>
