import { mapState } from 'vuex'
import formatDate from '../../helper/formatDate'
import { Message } from 'element-ui';
export default {
  data() {
    return {
      user: {},
      blogs: []
    }
  },
  created() {
    this.user = this.$store.state.auth.user
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        console.log(res)
        this.blogs = res.data
      })
  },
  methods: {
    formatDate,
    onDelete(id) {
      blog.deleteBlog({ blogId: id })
        .then(res => {
          Message.success(res.msg)
          this.$router.go(0)
        })
    }
  }
}