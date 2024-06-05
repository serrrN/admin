<template>
  <div class="header-menu">hover</div>
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
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  ::after {
    content: attr(alt);
    width: 20vw;
    height: 8vw;
    background-color: #191919;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
