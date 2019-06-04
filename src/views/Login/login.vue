<template>
  <div class="loginWrapper">
    <div class="login">
      <div class="item">
        <label>
          用户名
          <el-input placeholder="请输入用户名" @keyup.enter.native="onlogin()" v-model="username"></el-input>
        </label>
      </div>
      <div class="item">
        <label>
          密码
          <el-input
            placeholder="请输入密码"
            show-password
            v-model="password"
            @keyup.enter.native="onlogin()"
          ></el-input>
        </label>
      </div>
      <div class="loginButton">
        <el-button type="primary" @click="onlogin()">立即登录</el-button>
      </div>
    </div>
    <p class="loginIn">
      <span>没有账号？</span>
      <span>
        <router-link to="./register">
          <a>点我注册</a>
        </router-link>
      </span>
    </p>
  </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
