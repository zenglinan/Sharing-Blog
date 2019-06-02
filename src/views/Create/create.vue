<template>
  <div class="createWrapper">
    <h1>新建文章</h1>
    <h3>文章标题</h3>
    <el-input type="text" placeholder="请输入内容" maxlength="20" show-word-limit v-model="title"></el-input>
    <p class="msg">限20个字</p>
    <h3>文章内容</h3>
    <el-input
      type="textarea"
      :autosize="{ minRows: 8, maxRows: 30}"
      placeholder="请输入内容"
      resize="none"
      maxlength="1000"
      show-word-limit
      v-model="content"
    ></el-input>
    <p class="msg">限1000个字</p>
    <p class="atIndex">
      <label>
        <el-switch v-model="atIndex" active-text="是否展示到首页"></el-switch>
      </label>
    </p>
    <el-button type="primary" @click="onCreate()">发表文章</el-button>
  </div>
</template>
<style src="./create.scss" lang="scss"></style>
<script src="./create.js"></script>


