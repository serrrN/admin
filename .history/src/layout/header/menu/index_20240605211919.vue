<template>
  <div class="header-menu">
    <!-- 菜单操作 -->
    <div class="handle">
      <div class="handle-item">
        <el-icon size="20"><Message /></el-icon>
      </div>
      <div class="handle-item">
        <el-icon size="20"><FullScreen /></el-icon>
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
  justify-content: flex-end;
  width: 30%;
  height: 100%;
  //菜单操作
  .handle {
    width: 5vw;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    .handle-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #f5f5f5;
      }
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
    transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;
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
    &:after:hover {
      animation: slidebg 3s linear infinite;
      transform: scale(1.1);
     
    }
  }
}
@keyframes slidebg {
  to {
    background-position: 9vw;
  }
}
</style>
