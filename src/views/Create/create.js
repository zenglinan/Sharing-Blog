import blog from '@/api/blog'
import {Message} from 'element-ui'
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
          Message.success(res.msg)
        this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}