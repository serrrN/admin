<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: 240px;
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
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
