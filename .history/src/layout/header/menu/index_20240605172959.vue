<template>
  <div class="header-menu"></div>
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

  &:after {
    content: attr(alt);
    width: 20vw;
    height: 4vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
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
