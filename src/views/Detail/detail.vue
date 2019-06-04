<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{ blog.title }}</h3>
      <p>
        <router-link :to="`./user/${user.id}`">{{ user.username }}</router-link>
        发布于{{ formatDate(blog.createdAt).day }}
      </p>
    </section>
    <section class="description">
      <h3>Description</h3>
      <p>{{ blog.description }}</p>
    </section>
    <section class="article">
      <h3>Article</h3>
      <p>
        {{ blog.content }}
      </p>
    </section>
  </div>
</template>

<script src="./detail.js"></script>

<style src="./detail.scss" lang="scss"></style>
