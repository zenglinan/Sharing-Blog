import blog from "@/api/blog";
import { Message } from 'element-ui'

export default {
  data() {
    return {
      blogId: 0,
      blog: {}
    }
  },
  computed: {
    content: {
      get() {
        return this.blog.content
      },
      set(newValue) {
        this.blog.content = newValue
      }
    },
    title: {
      get() {
        return this.blog.title
      },
      set(newValue) {
        this.blog.title = newValue
      }
    }

  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId })
      .then(res => {
        this.blog = res.data
      })
  },
  methods: {
    onUpdateBlog() {
      blog.updateBlog({ blogId: this.blogId }, { title: this.blog.title, content: this.blog.content })
        .then((res) => {
          Message.success(res.msg)
          this.$router.push({ path: `/mine` })
        })
    }
  }
}