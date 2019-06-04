import blog from '@/api/blog'
import formatDate from '../../helper/formatDate'
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
        this.blog = res.data
        this.user = this.blog.user
      })
  },
  methods: {
    formatDate
  }
}