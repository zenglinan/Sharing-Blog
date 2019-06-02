<template>
  <div class="indexWrapper">
    <div class="item" v-for="blog in blogs" :key="blog.id">
      <figure class="avatar">
        <img :src="blog.user.avatar" alt>
        <figcaption :title="blog.user.username">{{ blog.user.username }}</figcaption>
      </figure>
      <article>
        <h3>
          {{ blog.title }}
          <span>{{ blog.updatedAt | toDay }}</span>
        </h3>
        <p>{{ blog.description }}</p>
      </article>
    </div>
    <el-pagination
      @current-change="changePage"
      :current-page="page"
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
