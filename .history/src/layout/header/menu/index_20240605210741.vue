<template>
  <div class="header-menu">
    <!-- 菜单操作 -->
    <div class="handle">
      <div class="handle-item">
        <el-icon size="20"><Message /></el-icon>
      </div>
      <div class="handle-item">
        <el-icon><FullScreen /></el-icon>
      </div>
    </div>
    <!-- 用户信息 -->
    <div class="userMsg">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <p class="username">Admin</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.header-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  //菜单操作
  .handle {
    .handle-item {
      background-color: #f5f5f5;
    }
  }
  //用户信息
  .userMsg {
    width: calc(9vw);
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
      width: 9vw;
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
      width: calc(9vw + 5px);
      height: calc(3vw + 5px);
    }
  }
}
@keyframes slidebg {
  to {
    background-position: 9vw;
  }
}
</style>
