import { mapActions } from 'vuex'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    onregister() {
      this.register({
        username: this.username,
        password: this.password
      })
        .then(
          (res) => {
            Message.success(res.msg)
            this.$router.push({ path: '/' })
          },
          (res) => { Message.error(res.msg) }
        )
    }
  }
}