import Vue from 'nativescript-vue'
import Home from './views/Home'
import Auth from './views/auth/Auth'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  template: `
    <Frame>
      <Auth />
    </Frame>`,

  components: {
    Auth
  }
}).$start();
