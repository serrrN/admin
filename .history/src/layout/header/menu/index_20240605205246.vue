<template>
  <div class="header-menu">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <svg
      height="32"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="32"
      data-view-component="true"
      class="octicon octicon-mark-github v-align-middle color-fg-default"
    >
      <path
        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
      ></path>
    </svg>
    <p class="username">Admin</p>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  width: calc(10vw);
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
  position: relative;
  z-index: 1;
  margin: 8px;
  cursor: pointer;
  &:after {
    content: attr(alt);
    width: 10vw;
    height: 3vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    position: absolute;
    bottom: 2px;
  }
  &:hover {
    animation: slidebg 2s linear infinite;
    width: calc(10vw + 5px);
    height: calc(3vw + 5px);
  }
}
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>
