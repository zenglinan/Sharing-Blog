import blog from '@/api/blog'
import { Message } from 'element-ui';
export default {
  data() {
    return {
      blogs: [],
      userId: 1,
      page: 1
    }
  },
  created() {
    this.userId = parseInt(this.$route.params.userId)
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.userId, { page: this.page })
      .then(res => {
        if (res.data.length !== 0) {
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
        }else {
          Message.error('用户已注销')
        }

      })
  }
}