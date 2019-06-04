<template>
  <div class="userWrapper">
    <section class="userInfo">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{ user.username }}</h3>
    </section>
    <article>
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{ formatDate(blog.updatedAt).day }}</span>
          <span class="month">{{ formatDate(blog.updatedAt).month }}月</span>
          <span class="year">{{ formatDate(blog.updatedAt).year }}</span>
        </div>
        <router-link :to='`/detail/${blog.id}`' class="articleWrapper">
          <div class="article">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.description }}</p>
            <div class="control">
              <span>
                <router-link :to='`/edit/${blog.id}`'>编辑</router-link>
              </span>
              <span>
                <a href="javascript:;" @click.prevent="onDelete(blog.id)">删除</a>
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </article>
  </div>
</template>
<script src="./mine.js"></script>
<style src="./mine.scss" lang="scss"></style>
