<template>
  <div class="editWrapper">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input
      type="text"
      placeholder="请输入内容"
      maxlength="20"
      show-word-limit
      v-model="title"
    >
    </el-input>
    <p class="msg">限20个字</p>
    <h3>文章内容</h3>
    <el-input
      type="textarea"
      :autosize="{ minRows: 15, maxRows: 15}"
      placeholder="请输入内容"
      resize="none"
      v-model="content"
    >
    </el-input>
    <p class="msg">限30个字</p>
    <el-button type="primary">发表文章</el-button>
  </div>
</template>
<style src="./edit.scss" scoped lang="scss"></style>
<script src="./edit.js"></script>


