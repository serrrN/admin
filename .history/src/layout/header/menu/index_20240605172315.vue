<template>
  <div class="header-menu"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width:calc(20vw + 6px);
  height:calc(8vw + 6px);
  background-image: linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%);
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:3vw;
  font-weight:bold;
  &:after {
  content:attr(alt);
  width:20vw;
  height:8vw;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
}
&:hover {
  animation:slidebg 2s linear infinite;
}
}
@keyframes slidebg {
  to {
    background-position:20vw;
  }
}



</style>
