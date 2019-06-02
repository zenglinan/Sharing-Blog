import blog from '@/api/blog'
export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({ page: this.page })
      .then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
      })
  },
  methods: {
    changePage(newPage) {
      blog.getIndexBlogs({ page: newPage })
        .then(res => {
          this.blogs = res.data
          this.total = res.total
          this.$router.push({ path: '/',query: {page:newPage} })
        })
    }
  },
  filters: {
    toDay(date) {
      let time = new Date(date)
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    }
  }
}