import blog from '@/api/blog'
export default {
  data() {
    return {
      blog: [],
      user: {}
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId })
      .then(res => {
        console.log(res)
        this.blog = res.data
        this.user = this.blog.user
      })
  }
}