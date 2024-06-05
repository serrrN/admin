<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: calc(240px + 6px);
  height: calc(60px + 6px);
  background-image: linear-gradient(
    90deg,
    #00c0ff 0%,
    #ffcf00 49%,
    #fc4f4f 80%,
    #00c0ff 100%
  );
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    width: calc(240px);
    height: calc(60px);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: visible;
    transition: all linear 1s;
    position: absolute;
    z-index: -1;
  }
 
}
.header-menu:hover{
    &::before{
      visibility: hidden;
    }
  }
</style>
