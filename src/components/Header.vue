<template>
  <header :class="{login: isLogin, noLogin: !isLogin}">
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <h4>多人共享博客</h4>
      <el-row>
        <router-link to="/register">
          <el-button type="primary" plain>立即注册</el-button>
        </router-link>
        <router-link to="/login">
          <el-button type="primary" plain>立即登陆</el-button>
        </router-link>
      </el-row>
    </template>
    <template v-else-if="isLogin">
      <div class="headerContent">
        <h1>Let's share</h1>
        <div class="user">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Pencil1"></use>
          </svg>
          <img :src="user.avatar" alt="avator" :title="user.username">
          <div class="set">
            <el-dropdown>
              <span class="el-dropdown-link">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shezhi"></use>
                </svg>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/mine" class="navItem">
                  <el-dropdown-item>我的博客</el-dropdown-item>
                </router-link>
                <a to="/" class="navItem" @click.prevent="logout()">
                  <el-dropdown-item>注销账号</el-dropdown-item>
                </a>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </template>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLogin", "user"])
  },

  created() {
    this.checkLogin();
  },

  methods: {
    ...mapActions(["checkLogin", "logout"]),

    onLogout() {
      this.logout();
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  color: #fff;
}
header.noLogin {
  min-height: 260px;
  background-color: rgba(64, 158, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
  }
  h4 {
    color: #fff;
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
header.login {
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
      .set {
        margin-left: 14px;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
a.navItem {
  text-decoration: none;
  color: #333;
}
</style>


