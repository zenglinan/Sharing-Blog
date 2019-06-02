import blog from '@/api/blog'
export default {
  data() {
    return {
      title: '',
      content: '',
      atIndex: true
    }
  },
  methods: {
    onCreate() {
      blog.createBlog({ title: this.title, content: this.content, description: '', atIndex: this.atIndex })
        .then(res=>{
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}