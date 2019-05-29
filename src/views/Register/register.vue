<template>
  <div class="registerWrapper">
    <div class="register">
      <div class="item">
        <label>
          用户名
          <el-input placeholder="请输入用户名"></el-input>
          <p>该账户可以注册</p>
        </label>
      </div>
      <div class="item">
        <label>
          密码
          <el-input
            placeholder="请输入密码"
            show-password
          ></el-input>
          <p>√</p>
        </label>
      </div>
      <div class="registerButton">
        <el-button type="primary">点我注册</el-button>
      </div>
    </div>
    <p class="loginIn"><span>已有账号？</span><span><a href="/login">直接登录</a></span></p>
  </div>
</template>
<script src="./register.js"></script>
<style lang="scss" scoped src="./register.scss"></style>
