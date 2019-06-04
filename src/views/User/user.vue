<template>
  <div class="userWrapper">
    <section class="userInfo">
      <img
        :src="user.avatar"
        :alt="user.username"
        :title="user.username"
        class="avatar"
      >
      <h3>{{ user.username }}</h3>
    </section>
    <article>
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{ formatDate(blog.updatedAt).day }}</span>
          <span class="month">{{ formatDate(blog.updatedAt).month }}月</span>
          <span class="year">{{ formatDate(blog.updatedAt).year }}</span>
        </div>
        <div class="article">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script src="./user.js"></script>
<style src="./user.scss" lang="scss" scoped></style>
