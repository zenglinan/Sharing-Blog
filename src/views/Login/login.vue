<template>
    <div class="loginWrapper">
      <div class="login">
        <div class="item">
          <label>
            用户名
            <el-input placeholder="请输入用户名"></el-input>
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
        <div class="loginButton">
          <el-button type="primary">立即登录</el-button>
        </div>
      </div>
      <p class="loginIn"><span>没有账号？</span><span><a href="/register">前往注册</a></span></p>
    </div>

</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
