import Vue from 'vue'
import VuerifyDirective from 'v-vuerify-next'

Vue.use(VuerifyDirective)

new Vue({
  el: '#app',

  data () {
    return {
      username: '',
      birthday: '',
      email: '',
      bio: ''
    }
  },

  vuerify: {
    username: 'required',
    birthday: {
      test (val) {
        return /\d{4}-\d{1,2}-\d{1,2}/.test(val) && Date.parse(val)
      },
      message: '日期格式不正确 yyyy-mm-dd'
    },
    email: 'email',
    bio: {
      test: /\w{4,}/,
      message: '至少四位'
    }
  },

  computed: {
    errors () {
      return this.$vuerify.$errors
    }
  },

  methods: {
    handleSubmit () {
      if (this.$vuerify.check()) {
        alert(`welcome ${this.username}`) // eslint-disable-line
      }
    }
  }
})
