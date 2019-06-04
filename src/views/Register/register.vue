<template>
  <div class="registerWrapper">
    <div class="register">
      <div class="item">
        <label>
          用户名
          <el-input @keyup.enter.native="onregister()" placeholder="请输入用户名" v-model="username"></el-input>
        </label>
      </div>
      <div class="item">
        <label>
          密码
          <el-input
            placeholder="请输入密码"
            show-password
            v-model="password"
            @keyup.enter.native="onregister()"
          ></el-input>
        </label>
      </div>
      <div class="registerButton">
        <el-button type="primary" @click="onregister()">点我注册</el-button>
      </div>
    </div>
    <p class="loginIn">
      <span>已有账号？</span>
      <span>
        <router-link to="./login">
          <a>直接登录</a>
        </router-link>
      </span>
    </p>
  </div>
</template>
<script src="./register.js"></script>
<style lang="scss" scoped src="./register.scss"></style>
