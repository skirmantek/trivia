import Vue from 'vue'
import App from '@/app/App'
import '@/assets/scss/style.scss'

import axios from '@/packages/axios'
import '@/packages/vue-cookie'

new Vue({
  render: h => h(App),
  async beforeCreate () {
    if (!this.$cookie.get('session')) {
      const { data } = await axios.get('/api_token.php?command=request')
      this.$cookie.set('session', data.token, { expires: '6h' })
    }
  }
}).$mount('#app')
