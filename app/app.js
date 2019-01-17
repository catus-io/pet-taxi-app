import Vue from 'nativescript-vue'
import Home from './components/Home'
import Auth from './components/Auth'
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
