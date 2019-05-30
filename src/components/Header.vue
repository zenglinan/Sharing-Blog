<template>
  <header :class="{login: isLogin, noLogin: !isLogin}">
    <template v-if="isLogin">
      <h1>Let's share</h1>
      <h4>多人共享博客</h4>
      <el-row>
        <el-button
          type="primary"
          plain
        ><a href="/register">立即注册</a></el-button>
        <el-button
          type="primary"
          plain
        ><a href="/login">立即登陆</a></el-button>
      </el-row>
    </template>
    <template v-else-if="!isLogin">
      <div class="headerContent">
        <h1>Let's share</h1>
        <div class="user">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-Pencil1"></use>
          </svg>
          <img
            src="../assets/avator.png"
            alt="avator"
          >
        </div>
      </div>
    </template>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false
    };
  }
};
</script>
<style lang="scss" scoped>
header {
  color: #fff;
}
header.login {
  height: 260px;
  background-color: rgba(64, 158, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 20px;
    font-size: 16px;
  }
  .el-row {
    margin-top: 60px;
    .el-button {
      margin: 0 10px 0 10px;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
header.noLogin {
  background-color: rgba(64, 158, 255, 0.5);
  display: flex;
  justify-content: center;
  .headerContent {
    width: 75%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: rgb(255, 255, 255);
      font-size: 32px;
      text-transform: uppercase;
    }
    .user {
      display: flex;
      align-items: center;
      .icon {
        width: 2.2em;
        height: 2.2em;
        cursor: pointer;
      }
      img {
        margin-left: 14px;
        width: 2.6em;
        border-radius: 50%;
      }
    }
  }
}
</style>


