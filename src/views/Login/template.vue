<template>
  <div class="loginWrapper">
    <div class="login">
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
          <el-input placeholder="请输入密码" show-password></el-input>
          <p>√</p>
        </label>
      </div>
      <div class="loginButton">
        <el-button type="primary">点我注册</el-button>
        <el-button type="primary">直接登录</el-button>
      </div>
    </div>
    
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>
