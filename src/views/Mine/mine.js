import { mapState } from 'vuex'
import formatDate from '../../helper/formatDate'
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
    formatDate
  }
}